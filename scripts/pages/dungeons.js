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
    }
];

const getDungeonLoot = (dungeon) => {
    const tierWeights = tableClearCounts.map(clearSetup => dungeon.getLootTierWeights(clearSetup.clears, clearSetup.debuff));
    const lootTiers = [];
    for (let tier of Object.keys(tierWeights[0]).sort((a, b) => a - b)) {
        const tierLoot = dungeon.lootTable[tier];
        const tierWeightSum = tierLoot.reduce((acc, item) => acc + (item.weight ?? 1), 0);
        const tierData = {
            tier: GameConstants.camelCaseToString(tier),
            items: [],
        };
        for (let item of tierLoot) {
            const itemWeight = item.weight ?? 1;
            const itemChance = itemWeight / tierWeightSum;
            const itemGameData = UndergroundItems.getByName(item.loot) ?? ItemList[item.loot];
            let pokemonData;
            if (!itemGameData) {
                pokemonData = pokemonMap[item.loot];
            }
            const itemData = {
                item: itemGameData?.displayName ?? pokemonData?.name,
                type: pokemonData ? 'pokemon' : 'item',
                image: itemGameData?.image ?? (pokemonData ? `assets/images/pokemon/${pokemonData.id}.png` : null),
                weight: item.weight,
                chanceInTier: itemChance,
                chances: []
            };
            for (let i = 0; i < tierWeights.length; i++) {
                const tierWeight = tierWeights[i][tier];
                const tierChance = itemChance * tierWeight;
                itemData.chances.push({
                    chance: tierChance,
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

module.exports = {
    getDungeonLoot,
    tableClearCounts
};
