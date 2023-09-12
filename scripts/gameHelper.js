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
            hints.push(...requirementHints(req.requirements, includeMarkdown));
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
                case SpecialEventRequirement:
                    hint = `The ${includeMarkdown ? `[[Events/${req.specialEventName}]]` : req.specialEventName} event must be active.`;
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

const getEvolutionHints = (evoData) => {
    if (!evoData) {
        return [];
    }

    const hints = [];
    const restrictions = evoData.restrictions;
    const listFormatter = new Intl.ListFormat('en', { type: 'disjunction' });

    let hint = '';
    // Base Evo type (Level or Stone)
    if (isLevelEvolution(evoData)) {
        const levelReq = getRequirementFromRestrictions(restrictions, 'PokemonLevelRequirement');
        hint = levelReq.requiredValue == 1 ? `Hatch ${levelReq.pokemon}` : `${levelReq.pokemon} must reach level ${levelReq.requiredValue}`;
    } else if (isStoneEvolution(evoData)) {
        const stone = ItemList[GameConstants.StoneType[evoData.stone]]._displayName;
        hint = `Requires using ${GameHelper.anOrA(stone)} ${stone}`;
    }

    // Additional restrictions
    if (isDungeonRestrictedEvolution(evoData)) {
        const dungeonReq = getRequirementFromRestrictions(restrictions, 'InDungeonRequirement');
        hint += ` in the ${dungeonReq.dungeon} dungeon`;
    }

    if (isTimeRestrictedEvolution(evoData)) {
        const timeReq = getRequirementFromRestrictions(restrictions, 'DayCyclePartRequirement');
        hint += ` while the time is ${listFormatter.format(timeReq.dayCycleParts.map((t) => DayCyclePart[t]))}`;
    }

    if (isEnvironmentRestrictedEvolution(evoData)) {
        const envReq = getRequirementFromRestrictions(restrictions, 'InEnvironmentRequirement');
        hint += ` in ${GameHelper.anOrA(envReq.environment)} ${envReq.environment} environment`;
    }

    if (isQuestLineRestrictedEvolution(evoData)) {
        const questReq = getRequirementFromRestrictions(restrictions, 'QuestLineRequirement');
        hint += ` after completing the ${questReq.questLineName} quest line`;
    };

    if (isInRegionRestrictedEvolution(evoData)) {
        const inRegionReq = getRequirementFromRestrictions(restrictions, 'InRegionRequirement');
        hint += ` in the ${listFormatter.format(inRegionReq.regions.map(r => getRegionName(r)))} region`;
    }

    if (isWeatherRestrictedEvolution(evoData)) {
        const weatherReq = getRequirementFromRestrictions(restrictions, 'WeatherRequirement');
        hint += ` during ${listFormatter.format(weatherReq.weather.map(w => WeatherType[w]))} weather`;
    }

    if (isHeldItemRestrictedEvolution(evoData)) {
        const itemReq = getRequirementFromRestrictions(restrictions, 'HoldingItemRequirement');
        hint += ` while holding ${GameHelper.anOrA(itemReq.itemName)} ${GameConstants.humanifyString(itemReq.itemName)}`;
    }

    if (isMegaEvolution(evoData)) {
        const megaReq = getRequirementFromRestrictions(restrictions, 'MegaEvolveRequirement');
        const requiredAttack = pokemonMap[megaReq.name].attack * GameConstants.MEGA_REQUIRED_ATTACK_MULTIPLIER;
        hint += ` after obtaining ${GameConstants.humanifyString(GameConstants.MegaStoneType[megaReq.megaStone])} and ${megaReq.name} has ${requiredAttack.toLocaleString()} or more attack`;
    }

    if (hint.length) {
        hints.push(`${hint}.`);
    }

    if (hints.length) {
        // Max Region restriction, skipping if Kanto
        const maxRegionReq = getRequirementFromRestrictions(restrictions, 'MaxRegionRequirement');
        if (maxRegionReq && maxRegionReq.requiredValue != GameConstants.Region.kanto) {
            hints.push(`You must have reached the ${getRegionName(maxRegionReq.requiredValue)} region.`);
        }
    } else {
        // Default to standard hints if not covered here
        hints.push(...restrictions.map(r => r.hint()));
    }

    return hints;
};

const isLevelEvolution = (evoData) => {
    return evoData.trigger == EvoTrigger.LEVEL;
}

const isStoneEvolution = (evoData) => {
    return evoData.trigger == EvoTrigger.STONE;
};

const isDungeonRestrictedEvolution = (evoData) => {
    return hasEvoRestrictions(evoData.restrictions, ['InDungeonRequirement']);
};

const isTimeRestrictedEvolution = (evoData) => {
    return hasEvoRestrictions(evoData.restrictions, ['DayCyclePartRequirement']);
};

const isEnvironmentRestrictedEvolution = (evoData) => {
    return hasEvoRestrictions(evoData.restrictions, ['InEnvironmentRequirement']);
};

const isQuestLineRestrictedEvolution = (evoData) => {
    return hasEvoRestrictions(evoData.restrictions, ['QuestLineRequirement']);
}

const isInRegionRestrictedEvolution = (evoData) => {
    return hasEvoRestrictions(evoData.restrictions, ['InRegionRequirement']);
};

const isWeatherRestrictedEvolution = (evoData) => {
    return hasEvoRestrictions(evoData.restrictions, ['WeatherRequirement']);
};

const isHeldItemRestrictedEvolution = (evoData) => {
    return hasEvoRestrictions(evoData.restrictions, ['HoldingItemRequirement']);
};

const isMegaEvolution = (evoData) => {
    return hasEvoRestrictions(evoData.restrictions, ['MegaEvolveRequirement']);
};

const hasEvoRestrictions = (restrictions, requirements) => {
    return requirements.every(req => restrictions.some(res => res.constructor.name == req));
};

const getRequirementFromRestrictions = (restrictions, name) => {
    const req = restrictions.find(res => {
        if (res.constructor.name == 'LazyRequirementWrapper') {
            return res.unwrap().constructor.name == name;
        }

        return res.constructor.name == name;
    });

    return req?.req ?? req;
};

const getRegionName = (region) => {
    return GameConstants.camelCaseToString(GameConstants.Region[region]);
};

const getRegionMap = (region, subregion) => {
    // There might be a way to grab these out of the HTML
    const regionPNGs = [
        ['kanto-kanto', 'kanto-sevii123', 'kanto-sevii4567' ],
        ['johto'],
        ['hoenn', 'orre'],
        ['sinnoh'],
        ['unova'],
        ['kalos'],
        ['alola-melemele', 'alola-akala', 'alola-ulaula', 'alola-poni', 'alola-magikarp-jump'],
        ['galar-south', 'galar-north', 'galar-isle-of-armor', 'galar-crown-tundra'],
        [], // hisui
        [], // paldea
    ];
    return regionPNGs[region][subregion];
}

let cachedPokeclickerHTML;
let overlaySVG = ko.observable("");

const fetchPokeclickerHTML = (mapLocationSelector) => {
    overlaySVG("");
    if (!cachedPokeclickerHTML) {
        $.get('/pokeclicker/docs/index.html',
            function(data) {
                cachedPokeclickerHTML = data;
                setMapLocation(mapLocationSelector);
            }
        );
    } else {
        setMapLocation(mapLocationSelector);
    }
}

const getLocationOverlaySVG = (town, region, subregion) => {
    // Replace single quotes with their escaped versions
    town = town.replaceAll(String.raw`'`, String.raw`\\'`)
    fetchPokeclickerHTML(`'${town}'`);
    return getRegionMap(region, subregion);
}

const getRouteOverlaySVG = (route, region, subregion) => {
    fetchPokeclickerHTML(`moveToRoute(${route}, ${region})`);
    return getRegionMap(region, subregion);
}

const setMapLocation = (selector) => {
    const dom = new DOMParser().parseFromString(cachedPokeclickerHTML, 'text/html');
    const map = dom.querySelector('#map');

    const locationElements = map.querySelectorAll(`[data-bind*="${selector}"]`);
    if (locationElements.length > 0) {
        const outputElements = [];
        const firstTownNode = locationElements[0];

        if (locationElements.length == 1 && firstTownNode.nodeName === "image") {
            // If there is only one element and it's an image (due to being a dungeon-in-a-town), replace image with rect that we can fill
            const newNode = document.createElement("rect");
            [...firstTownNode.attributes].forEach(attr => newNode.setAttribute(attr.nodeName, attr.nodeValue));
            outputElements.push(newNode);
        } else {
            outputElements.push(...locationElements);
        }
        // Create our own map mini-DOM with only the necessary elements
        const parent = firstTownNode.parentNode;
        parent.replaceChildren(...outputElements);
        map.replaceChildren(parent);
        // Scrub all the knockout bindings so they don't affect the rendering
        const allElements = map.querySelectorAll("*");
        allElements.forEach(element => {
            element.removeAttribute('data-bind');
        });
        overlaySVG(map.outerHTML);
    }
}

module.exports = {
    requirementHints,
    getEvolutionHints,
    getRegionName,
    getLocationOverlaySVG,
    getRouteOverlaySVG,
    overlaySVG,
}
