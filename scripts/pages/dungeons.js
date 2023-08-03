const getTableClearCounts = (dungeon) => {
    if (getTableClearCounts.cache.has(dungeon)) {
        return getTableClearCounts.cache.get(dungeon);
    }

    const hasItemsThatIgnoreDebuff = Object.values(dungeon.lootTable).flat().some(item => item.ignoreDebuff);
    const hasItemsWithClearRequirements = Object.values(dungeon.lootTable).flat().some(item => item.requirement instanceof ClearDungeonRequirement);

    const tableClearCounts = [
        {
            clears: 0,
            debuff: false,
            header: '0 clears'
        },
        {
            clears: 100,
            debuff: false,
            header: '100 clears'
        },
        {
            clears: 250,
            debuff: false,
            header: '250 clears'
        },
        {
            clears: 500,
            debuff: false,
            header: '500 clears'
        }
    ];

    if (hasItemsThatIgnoreDebuff || hasItemsWithClearRequirements) {
        tableClearCounts.push(...tableClearCounts.map(clearSetup => ({...clearSetup, debuff: true, header: `Debuffed (${clearSetup.header})`})))
    } else {
        tableClearCounts.push({
            clears: 0,
            debuff: true,
            header: 'Debuffed'
        });
    }

    getTableClearCounts.cache.set(dungeon, tableClearCounts);

    return tableClearCounts;
};
getTableClearCounts.cache = new WeakMap();

const itemTypeCategories = {
    pokemon: 'Pokémon',
    item: 'Items',
    berry: 'Berries',
};

/**
 * Returns a map of items to their chance of dropping in the given dungeon.
 * Ignores the ignoreDebuff flag.
 * @param dungeon
 * @param clears
 * @param debuffed
 * @return {Map<Loot, number>}
 */
const getDungeonLootChancesIgnoringFlag = (dungeon, clears, debuffed = false, requirement = () => true) => {
    const tierWeights = getLootTierWeights(dungeon, clears, debuffed, requirement);
    const weightSum = Object.keys(tierWeights)
        .filter(tier => dungeon.lootTable[tier].some(requirement))
        .map(tier => tierWeights[tier])
        .reduce((acc, weight) => acc + weight, 0);
    const itemToChance = new Map();
    for (let tier of Object.keys(tierWeights).sort((a, b) => a - b)) {
        const tierLoot = dungeon.lootTable[tier].filter(requirement);
        const tierWeightSum = tierLoot.reduce((acc, item) => acc + (item.weight ?? 1), 0);
        for (let item of tierLoot) {
            const itemWeight = item.weight ?? 1;
            const itemChance = itemWeight / tierWeightSum * tierWeights[tier] / weightSum;
            itemToChance.set(item, itemChance);
        }
    }
    return itemToChance;
};

/**
 * Returns a map of items to their chance of dropping in the given dungeon.
 * Takes into account the ignoreDebuff flag.
 * If the debuff is active and there are items that ignore the debuff, the chance of all items is reduced based on the non-debuffed chance of those items.
 * @param dungeon
 * @param clears
 * @param debuffed
 * @return {Map<Loot, number>}
 */
const getDungeonLootChances = (dungeon, clears, debuffed = false, requirement = () => true) => {
    const secondRoll = debuffed && Object.values(dungeon.lootTable).flat().some(item => item.ignoreDebuff);
    const itemToChance = getDungeonLootChancesIgnoringFlag(dungeon, clears, debuffed,
        secondRoll ? (item => requirement(item) && !item.ignoreDebuff) : requirement);
    if (secondRoll) {
        const chancesWithoutDebuff = getDungeonLootChancesIgnoringFlag(dungeon, clears, false, requirement);
        const chanceForItemsIgnoringDebuff = Array.from(chancesWithoutDebuff.keys())
            .filter(item => item.ignoreDebuff)
            .map(item => chancesWithoutDebuff.get(item))
            .reduce((acc, chance) => acc + chance, 0);
        for (let item of chancesWithoutDebuff.keys()) {
            const chanceIgnoringDebuff = item.ignoreDebuff ? chancesWithoutDebuff.get(item) : 0;
            itemToChance.set(item, chanceIgnoringDebuff + (itemToChance.get(item) ?? 0) * (1 - chanceForItemsIgnoringDebuff));
        }
    }
    return itemToChance;
};

/**
 * Returns a function that checks whether the requirements for a dungeon loot item are met.
 * @param dungeon
 * @param clearSetup
 * @return {(function(*))|*}
 */
const checkLootRequirements = (dungeon, clearSetup) => {
    const debuffRegion = (dungeon.optionalParameters?.dungeonRegionalDifficulty ?? GameConstants.getDungeonRegion(dungeon.name)) + 3;
    // recursive requirement check
    const checkRequirement = (requirement) => {
        if (requirement instanceof MaxRegionRequirement) {
            if ([GameConstants.AchievementOption.more, GameConstants.AchievementOption.equal].includes(requirement.option) && !clearSetup.debuff) {
                // if the requirement specifies a minimum or specific region and non-debuffed odds are being calculated, make sure the minimum required region does not trigger the debuff
                return debuffRegion > requirement.region;
            } else if ([GameConstants.AchievementOption.less, GameConstants.AchievementOption.equal].includes(requirement.option) && clearSetup.debuff) {
                // if the requirement specifies a maximum or specific region and debuffed odds are being calculated, make sure the maximum required region triggers the debuff
                return debuffRegion <= requirement.region;
            }
        } else if (requirement instanceof ClearDungeonRequirement) {
            if (requirement.dungeonIndex === GameConstants.getDungeonIndex(dungeon.name)) {
                switch (requirement.option) {
                    case GameConstants.AchievementOption.less:
                        return clearSetup.clears < requirement.requiredValue;
                    case GameConstants.AchievementOption.equal:
                        return clearSetup.clears === requirement.requiredValue;
                    case GameConstants.AchievementOption.more:
                    default:
                        return clearSetup.clears >= requirement.requiredValue;
                }
            }
        } else if (requirement instanceof MultiRequirement) {
            return requirement.requirements.every(checkRequirement);
        } else if (requirement instanceof OneFromManyRequirement) {
            return requirement.requirements.some(checkRequirement);
        }
        return true;
    };
    return (item) => {
        if (item.requirement) {
            return checkRequirement(item.requirement);
        }
        return true;
    };
}

/**
 * Returns the loot tier weights for a given dungeon, clear setup and requirement check.
 * @param dungeon
 * @param clears
 * @param debuffed
 * @param requirement
 * @return {Record<string, number>} object mapping loot tiers to weights
 */
const getLootTierWeights = (dungeon, clears, debuffed, requirement = () => true) => {
    const lootToRequirementMap = new Map();

    // Replace requirements with ours
    for (let tier of Object.keys(dungeon.lootTable)) {
        for (let item of Object.values(dungeon.lootTable[tier])) {
            const originalRequirement = item.requirement;
            lootToRequirementMap.set(item, originalRequirement);
            item.requirement = {
                // Pass item with original requirement
                isCompleted: () => requirement({...item, requirement: originalRequirement})
            };
        }
    }

    const tierWeights = dungeon.getLootTierWeights(clears, debuffed);

    // Restore requirements
    for (let tier of Object.keys(dungeon.lootTable)) {
        for (let item of Object.values(dungeon.lootTable[tier])) {
            item.requirement = lootToRequirementMap.get(item);
        }
    }

    return tierWeights;
};

const getDungeonLoot = (dungeon) => {
    if (getDungeonLoot.cache.has(dungeon)) {
        return getDungeonLoot.cache.get(dungeon);
    }

    const tableClearCounts = getTableClearCounts(dungeon)
    const tierWeights = tableClearCounts.map(clearSetup => getLootTierWeights(dungeon, clearSetup.clears, clearSetup.debuff, checkLootRequirements(dungeon, clearSetup)));
    const itemChanceMaps = tableClearCounts.map(clearSetup => getDungeonLootChances(dungeon, clearSetup.clears, clearSetup.debuff, checkLootRequirements(dungeon, clearSetup)));
    const lootTiers = [];
    for (let tier of Object.keys(dungeon.lootTable).sort((a, b) => a - b)) {
        const tierLoot = dungeon.lootTable[tier];
        const tierData = {
            tier: GameConstants.camelCaseToString(tier),
            items: [],
        };
        for (let item of tierLoot) {
            let itemGameData = UndergroundItems.getByName(item.loot) ?? ItemList[item.loot];
            let itemType = 'item';
            if (!itemGameData && typeof BerryType[item.loot] === 'number') {
                itemGameData = {
                    displayName: item.loot,
                    image: `assets/images/items/berry/${item.loot}.png`
                };
                itemType = 'berry';
            }
            let pokemonData;
            if (!itemGameData) {
                pokemonData = pokemonMap[item.loot];
                itemType = 'pokemon';
            }
            const itemData = {
                item: itemGameData?.displayName ?? pokemonData?.name,
                type: itemType,
                image: itemGameData?.image ?? (pokemonData ? `assets/images/pokemon/${pokemonData.id}.png` : null),
                weight: item.weight ?? 1,
                requirement: item.requirement?.hint(),
                ignoreDebuff: item.ignoreDebuff,
                chances: []
            };
            for (let i = 0; i < tierWeights.length; i++) {
                itemData.chances.push({
                    chance: itemChanceMaps[i].get(item),
                    clears: tableClearCounts[i].clears,
                    debuff: tableClearCounts[i].debuff
                });
            }
            tierData.items.push(itemData);
        }
        lootTiers.push(tierData);
    }
    getDungeonLoot.cache.set(dungeon, lootTiers);

    return lootTiers;
};
getDungeonLoot.cache = new WeakMap();

const getDungeonLootChancesForItem = (itemName) => {
    const dungeonsDroppingItem = Object.values(dungeonList).filter((d) => Object.values(d.lootTable).some((lt) => lt.some((l) => l.loot == itemName)));
    const dungeonsWithLootTables = dungeonsDroppingItem.map(dungeon => (
        {
            dungeonName: dungeon.name,
            lootTable: getDungeonLoot(dungeon)
        }
    ));
    const item = UndergroundItems.getByName(itemName) ?? ItemList[itemName];
    const lootName = item.displayName;

    // Collate and flatten all item-specific data from each dungeon's loot tables
    const itemData = [];
    for (let dungeon of dungeonsWithLootTables) {
        for (let tier of dungeon.lootTable) {
            for (let loot of tier.items) {
                if (loot.item == lootName) {
                    const itemDungeonData = {
                        dungeonName: dungeon.dungeonName,
                        region: GameConstants.camelCaseToString(GameConstants.Region[GameConstants.getDungeonRegion(dungeon.dungeonName)]),
                        tier: tier.tier,
                        ...loot
                    }
                    itemData.push(itemDungeonData);
                }
            }
        }
    }

    var hasMeaningfullyDifferentDebuffChances = itemData.some((item) => {
        const debuffChances = item.chances.filter((chance) => chance.debuff).map((chance) => chance.chance ?? 0);
        const max = Math.max(...debuffChances);
        const min = Math.min(...debuffChances);
        const goesFromZeroToNonZero = (min == 0 && max != 0);
        const visibleDifferenceBetweenOdds = (max - min > 0.00005);
        return goesFromZeroToNonZero || visibleDifferenceBetweenOdds;
    });

    if (!hasMeaningfullyDifferentDebuffChances) {
        itemData.map((item) => item.chances = item.chances.slice(0, 5));
        return itemData;
    }

    // If some of the dungeons had hasItemsThatIgnoreDebuff, fill all itemChances to have 8 items
    if (itemData.some((item) => item.chances.length > 5)) {
        for (let data of itemData) {
            const chances = data.chances;
            const length = chances.length
            const lastIndex = length - 1;
            data.chances = Array(8).fill(chances[lastIndex]).toSpliced(0, length, ...chances);
        }
    }

    return itemData;
}

const hasLootWithRequirements = (dungeon) => {
    if (hasLootWithRequirements.cache.has(dungeon)) {
        return hasLootWithRequirements.cache.get(dungeon);
    }
    for (let tier of Object.keys(dungeon.lootTable)) {
        for (let item of dungeon.lootTable[tier]) {
            if (item.requirement) {
                hasLootWithRequirements.cache.set(dungeon, true);
                return true;
            }
        }
    }
    hasLootWithRequirements.cache.set(dungeon, false);
    return false;
};
hasLootWithRequirements.cache = new WeakMap();

module.exports = {
    getDungeonLoot,
    getDungeonLootChances,
    getDungeonLootChancesForItem,
    hasLootWithRequirements,
    getTableClearCounts,
    itemTypeCategories
};
