const getRequirements = (tempBattle) => {
    const requirements = [];
    tempBattle.requirements?.forEach((req) => {
        let hint = req.hint();
        switch (req.constructor) {
            case RouteKillRequirement:
                hint = `Defeat ${req.requiredValue} or more Pokémon on ${Routes.getName(req.route, req.region, true)}.`;
                break;
            case ClearDungeonRequirement:
                hint = `Clear the ${GameConstants.RegionDungeons.flat()[req.dungeonIndex]} dungeon ${req.requiredValue} or more time(s).`;
                break;
            case QuestLineStepCompletedRequirement:
                hint = req.option == GameConstants.AchievementOption.equal
                    ? `Complete step ${req.questIndex + 1} in the ${req.questLineName} quest line.`
                    : `Have not completed step ${req.questIndex + 1} in the ${req.questLineName} quest line.`;
                break;
            case GymBadgeRequirement:
                hint = req.option == GameConstants.AchievementOption.more
                    ? `Obtained the ${GameConstants.camelCaseToString(BadgeEnums[req.badge])} badge.`
                    : `Have not obtained the ${GameConstants.camelCaseToString(BadgeEnums[req.badge])} badge.`;
                break;
            case TemporaryBattleRequirement:
                hint = `Defeated ${req.battleName}.`;
                break;
        }
        requirements.push(hint);
    });

    return requirements;
};

module.exports = {
    getRequirements,
}
