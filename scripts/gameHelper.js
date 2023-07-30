const requirementHints = (requirement, includeMarkdown = true) => {
    if (!requirement) {
        return [];
    }

    if (!Array.isArray(requirement)) {
        requirement = [requirement];
    }

    const hints = [];
    requirement.forEach(req => {
        if (req instanceof MultiRequirement) {
            hints.push(...requirementHints(req.requirements));
        } else {
            let hint = req.hint();
            switch (req.constructor) {
                case RouteKillRequirement:
                    const routeName = Routes.getName(req.route, req.region, true);
                    hint = `Defeat ${req.requiredValue} or more Pokémon on ${includeMarkdown ? `[[Routes/${routeName}]]` : routeName}.`;
                    break;
                case ClearDungeonRequirement:
                    const dungeonName = GameConstants.RegionDungeons.flat()[req.dungeonIndex];
                    hint = `Clear the ${includeMarkdown ? `[[Dungeons/${dungeonName}]]` : dungeonName} dungeon ${req.requiredValue} or more time(s).`;
                    break;
                case QuestLineStepCompletedRequirement:
                    hint = req.option == GameConstants.AchievementOption.equal
                        ? `Complete step ${req.questIndex + 1} in the ${includeMarkdown ? `[[Quest Lines/${req.questLineName}]]` : req.questLineName} quest line.`
                        : `Have not completed step ${req.questIndex + 1} in the ${includeMarkdown ? `[[Quest Lines/${req.questLineName}]]` : req.questLineName} quest line.`;
                    break;
                case QuestLineCompletedRequirement:
                    hint = `Complete the ${includeMarkdown ? `[[Quest Lines/${req.questLineName}]]` : req.questLineName} quest line.`;
                    break;
                case GymBadgeRequirement:
                    hint = req.option == GameConstants.AchievementOption.more
                        ? `Obtained the ${GameConstants.camelCaseToString(BadgeEnums[req.badge])} badge.`
                        : `Have not obtained the ${GameConstants.camelCaseToString(BadgeEnums[req.badge])} badge.`;
                    break;
                case TemporaryBattleRequirement:
                    hint = `Defeated ${includeMarkdown ? `[[Temporary_Battles/${req.battleName}]]` : req.battleName}.`;
                    break;
                case DevelopmentRequirement:
                    hint = 'Not currently available.'
                    break;
            }
            hints.push(hint);
        }
    });

    return hints;
};

module.exports = {
    requirementHints,
}
