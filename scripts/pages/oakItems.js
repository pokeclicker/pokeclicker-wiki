const getOakItemBonus = (oakItem, level) => {
    const bonus = oakItem.bonusList[level];
    switch (oakItem.name) {
        case OakItemType.Magic_Ball:
            return `+${bonus}% Catch Rate`;
        case OakItemType.Amulet_Coin:
            return `x${bonus} Coins Earned`;
        case OakItemType.Rocky_Helmet:
            return `x${bonus} Click Damage`;
        case OakItemType.Exp_Share:
            return `x${bonus} EXP Earned`;
        case OakItemType.Sprayduck:
            return `x${bonus} Growth Speed`;
        case OakItemType.Shiny_Charm:
            return `x${bonus} Shiny Chance`;
        case OakItemType.Blaze_Cassette:
            return `x${bonus} Hatching Speed`;
        case OakItemType.Cell_Battery:
            return `Tier ${bonus} Discharge Patterns`;
        case OakItemType.Squirtbottle:
            return `x${bonus} Mutation Rate`;
        case OakItemType.Sprinklotad:
            return `x${bonus} Replant Rate`;
        case OakItemType.Explosive_Charge:
            return `${bonus} Tiles Damaged`;
        case OakItemType.Treasure_Scanner:
            return `${bonus}% Item Duplication Chance`;
        default:
            return oakItem.bonusSymbol == '%' ? `+${bonus}%` : `${oakItem.bonusSymbol}${bonus}`;
    }
};

const getOakItemUpgradeReq = (oakItem, level) => {
    const prevLevelExp = level > 0 ? oakItem.expList[level - 1] : 0;
    const req = Math.ceil((oakItem.expList[level] - prevLevelExp) / oakItem.expGain);
    return getOakItemUpgradeReqText(oakItem.name, req.toLocaleString());
};

const getOakItemUpgradeReqText = (oakItemType, val) => {
    switch (oakItemType) {
        case OakItemType.Magic_Ball:
            return `Capture ${val} Pokémon`;
        case OakItemType.Amulet_Coin:
            return `Defeat ${val} Pokémon`;
        case OakItemType.Rocky_Helmet:
            return `Click ${val} times`;
        case OakItemType.Exp_Share:
            return `Defeat ${val} Pokémon`;
        case OakItemType.Sprayduck:
            return `Gain ${val} berry harvest experience`;
        case OakItemType.Shiny_Charm:
            return `Encounter ${val} Shiny Pokémon`;
        case OakItemType.Blaze_Cassette:
            return `Hatch ${val} Eggs`;
        case OakItemType.Cell_Battery:
            return `Use Discharge ${val} times`;
        case OakItemType.Squirtbottle:
            return `Trigger ${val} berry mutations`;
        case OakItemType.Sprinklotad:
            return `Trigger ${val} berry replants`;
        case OakItemType.Explosive_Charge:
            return `Dig deeper ${val} times`;
        case OakItemType.Treasure_Scanner:
            return `Mine ${val} items in the Underground`;
        default:
            return val;
    }
};

module.exports = {
    getOakItemBonus,
    getOakItemUpgradeReq,
};