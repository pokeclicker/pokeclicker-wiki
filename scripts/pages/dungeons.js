const tableClearCounts = [
    {
        clears: 0,
        debuff: false
    },
    {
        clears: 100,
        debuff: false
    },
    {
        clears: 500,
        debuff: false
    },
    {
        clears: 0,
        debuff: true
    },
    {
        clears: 100,
        debuff: true
    },
    {
        clears: 500,
        debuff: true
    }
];

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
    const tierWeights = dungeon.getLootTierWeights(clears, debuffed);
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

const getDungeonLoot = (dungeon) => {
    const tierWeights = tableClearCounts.map(clearSetup => dungeon.getLootTierWeights(clearSetup.clears, clearSetup.debuff));
    const itemChanceMaps = tableClearCounts.map(clearSetup => getDungeonLootChances(dungeon, clearSetup.clears, clearSetup.debuff, checkLootRequirements(dungeon, clearSetup)));
    const lootTiers = [];
    for (let tier of Object.keys(tierWeights[0]).sort((a, b) => a - b)) {
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
    return lootTiers;
};

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
    hasLootWithRequirements,
    tableClearCounts,
    itemTypeCategories
};
