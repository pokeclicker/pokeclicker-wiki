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
                    const routeName = Routes.getName(req.route, req.region, false);
                    hint = `Defeat ${req.requiredValue} or more Pokémon on ${includeMarkdown ? `[[Routes/${routeName}]]` : routeName}.`;
                    break;
                case ClearDungeonRequirement:
                    const dungeonName = GameConstants.RegionDungeons.flat()[req.dungeonIndex];
                    hint = req.option == GameConstants.AchievementOption.more
                        ? `Clear the ${includeMarkdown ? `[[Dungeons/${dungeonName}]]` : dungeonName} dungeon ${req.requiredValue} or more time(s).`
                        : `No longer appears after clearing the ${includeMarkdown ? `[[Dungeons/${dungeonName}]]` : dungeonName} dungeon ${req.requiredValue} time(s).`;
                    break;
                case QuestLineStepCompletedRequirement:
                    if (typeof req.questIndex === 'function') {
                        hint = req.option == GameConstants.AchievementOption.equal || req.option == GameConstants.AchievementOption.more
                            ? `Progress in the ${includeMarkdown ? `[[Quest Lines/${req.questLineName}]]` : req.questLineName} quest line.`
                            : `Have not progessed to a certain step in the ${includeMarkdown ? `[[Quest Lines/${req.questLineName}]]` : req.questLineName} quest line.`;
                    } else {
                        hint = req.option == GameConstants.AchievementOption.equal || req.option == GameConstants.AchievementOption.more
                            ? `Complete step ${req.questIndex + 1} in the ${includeMarkdown ? `[[Quest Lines/${req.questLineName}]]` : req.questLineName} quest line.`
                            : `Have not completed step ${req.questIndex + 1} in the ${includeMarkdown ? `[[Quest Lines/${req.questLineName}]]` : req.questLineName} quest line.`;
                    }
                    break;
                case QuestLineCompletedRequirement:
                    hint = req.option >= GameConstants.AchievementOption.equal
                        ? `Complete the ${includeMarkdown ? `[[Quest Lines/${req.questLineName}]]` : req.questLineName} quest line.`
                        : `No longer appears after completing the ${includeMarkdown ? `[[Quest Lines/${req.questLineName}]]` : req.questLineName} quest line.`;
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
                case DayOfWeekRequirement:
                    hint = `Appears every ${GameConstants.DayOfWeek[req.DayOfWeekNum]}.`;
                    break;
                case DevelopmentRequirement:
                    hint = 'Not currently available.'
                    break;
                case PokemonDefeatedSelectNRequirement:
                    hint = null;
                    break;
            }

            if (hint?.length) {
                hints.push(hint);
            }
        }
    });

    if (requirement.some((req) => req instanceof PokemonDefeatedSelectNRequirement)) { // show last
        hints.push('Has a chance to appear here; randomly changes locations after being defeated.');
    }

    return hints;
};

const getEvolutionHints = (evoData) => {
    if (!evoData) {
        return [];
    }

    const hints = [];
    const restrictions = evoData.restrictions.filter(r => {
        // Filter Everstone from restrictions so it doesn't show up in hints
        if (r.itemName == 'Everstone') {
            return false;
        }
        return true;
    });
    const listFormatter = new Intl.ListFormat('en', { type: 'disjunction' });

    let hint = '';
    // Base Evo type (Level or Stone)
    if (isLevelEvolution(evoData)) {
        const levelReq = getRequirementFromRestrictions(restrictions, 'PokemonLevelRequirement');
        hint = levelReq.requiredValue == 1 ? `Hatch or feed a Rare Candy to ${levelReq.pokemon}` : `${levelReq.pokemon} must reach level ${levelReq.requiredValue}`;
    } else if (isStoneEvolution(evoData)) {
        const stone = ItemList[GameConstants.StoneType[evoData.stone]]._displayName;
        hint = `Requires using ${GameHelper.anOrA(stone)} ${stone}`;
    }

    // Additional restrictions
    if (isDungeonRestrictedEvolution(restrictions)) {
        const dungeonReq = getRequirementFromRestrictions(restrictions, 'InDungeonRequirement');
        hint += ` in the ${dungeonReq.dungeon} dungeon`;
    }

    if (isTimeRestrictedEvolution(restrictions)) {
        const timeReq = getRequirementFromRestrictions(restrictions, 'DayCyclePartRequirement');
        hint += ` while the time is ${listFormatter.format(timeReq.dayCycleParts.map((t) => DayCyclePart[t]))}`;
    }

    if (isEnvironmentRestrictedEvolution(restrictions)) {
        const envReq = getRequirementFromRestrictions(restrictions, 'InEnvironmentRequirement');
        hint += ` in ${GameHelper.anOrA(envReq.environment)} ${GameConstants.camelCaseToString(envReq.environment)} environment`;
    }

    if (isQuestLineRestrictedEvolution(restrictions)) {
        const questReq = getRequirementFromRestrictions(restrictions, 'QuestLineCompletedRequirement');
        hint += ` after completing the ${questReq.questLineName} quest line`;
    };

    if (isInRegionRestrictedEvolution(restrictions)) {
        const inRegionReq = getRequirementFromRestrictions(restrictions, 'InRegionRequirement');
        hint += ` in the ${listFormatter.format(inRegionReq.regions.map(r => getRegionName(r)))} region`;
    }

    if (isWeatherRestrictedEvolution(restrictions)) {
        const weatherReq = getRequirementFromRestrictions(restrictions, 'WeatherRequirement');
        hint += ` during ${listFormatter.format(weatherReq.weather.map(w => GameConstants.humanifyString(WeatherType[w])))} weather`;
    }

    if (isHeldItemRestrictedEvolution(restrictions)) {
        const itemReq = getRequirementFromRestrictions(restrictions, 'HoldingItemRequirement');
        hint += ` while holding ${GameHelper.anOrA(itemReq.itemName)} ${GameConstants.humanifyString(itemReq.itemName)}`;
    }

    if (isMegaEvolution(restrictions)) {
        const megaReq = getRequirementFromRestrictions(restrictions, 'MegaEvolveRequirement');
        const requiredAttack = pokemonMap[megaReq.name].attack * GameConstants.MEGA_REQUIRED_ATTACK_MULTIPLIER;
        hint += ` after obtaining ${GameConstants.humanifyString(GameConstants.MegaStoneType[megaReq.megaStone])} and ${megaReq.name} has ${requiredAttack.toLocaleString()} or more attack`;
    }

    if (isRequiredAttackEvolution(restrictions)) {
        const req = getRequirementFromRestrictions(restrictions, 'PokemonAttackRequirement');
        const requiredAttack = pokemonMap[req.pokemon].attack * req.requiredValue;
        hint += ` when it has ${requiredAttack.toLocaleString()} or more attack`;
    }

    if (isEventRestrictedEvolution(restrictions)) {
        const eventReq = getRequirementFromRestrictions(restrictions, 'SpecialEventRequirement');
        hint += ` during the ${eventReq.specialEventName} event`;
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

const isDungeonRestrictedEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['InDungeonRequirement']);
};

const isTimeRestrictedEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['DayCyclePartRequirement']);
};

const isEnvironmentRestrictedEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['InEnvironmentRequirement']);
};

const isQuestLineRestrictedEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['QuestLineCompletedRequirement']);
}

const isInRegionRestrictedEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['InRegionRequirement']);
};

const isWeatherRestrictedEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['WeatherRequirement']);
};

const isHeldItemRestrictedEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['HoldingItemRequirement']);
};

const isMegaEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['MegaEvolveRequirement']);
};

const isRequiredAttackEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['PokemonAttackRequirement']);
}

const isEventRestrictedEvolution = (restrictions) => {
    return hasEvoRestrictions(restrictions, ['SpecialEventRequirement']);
}

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
        const allElements = map.querySelectorAll("*");
        allElements.forEach(element => {
            // Scrub all the knockout bindings so they don't affect the rendering
            element.removeAttribute('data-bind');
            // And all image hrefs
            element.removeAttribute('href');
            element.removeAttribute('xlink:href');
        });
        overlaySVG(map.outerHTML);
    }
}

const getSafariSpriteId = (safariEncounter) => {
    const pokemon = PokemonHelper.getPokemonByName(safariEncounter.name);
    switch (safariEncounter.sprite) {
        case 'base' : return Math.floor(pokemon.id);
        case 'self' : return pokemon.id;
        default : return PokemonHelper.getPokemonByName(safariEncounter.sprite).id;
    }
}

const unwrapRequirement = (req) => (req?.constructor?.name === 'LazyRequirementWrapper' ? req.unwrap() : req);

// The region a requirement can first be completed in
const requirementRegion = (requirement, path = new Set()) => {
    const req = unwrapRequirement(requirement);
    // Only guards against cycles, requirements shared between branches are still checked
    if (!req || path.has(req)) {
        return GameConstants.Region.kanto;
    }
    path.add(req);
    const region = getRequirementRegion(req, path);
    path.delete(req);
    return region;
};

const getRequirementRegion = (req, path) => {
    if (req instanceof MultiRequirement) {
        return Math.max(GameConstants.Region.kanto, ...req.requirements.map((r) => requirementRegion(r, path)));
    }
    if (req instanceof OneFromManyRequirement) {
        return Math.min(...req.requirements.map((r) => requirementRegion(r, path)));
    }
    // "Before X" requirements don't delay unlocking
    if (req.option === GameConstants.AchievementOption.less) {
        return GameConstants.Region.kanto;
    }
    if (req instanceof MaxRegionRequirement) {
        return req.requiredValue;
    }
    if (req instanceof RouteKillRequirement) {
        const route = Routes.getRoute(req.region, req.route);
        return route ? routeUnlockRegion(route, path) : req.region;
    }
    if (req instanceof GymBadgeRequirement) {
        const gym = Object.values(GymList).find((g) => g.badgeReward === req.badge);
        return gym ? gymUnlockRegion(gym, path) : GameConstants.Region.kanto;
    }
    if (req instanceof QuestLineStartedRequirement || req instanceof QuestLineCompletedRequirement || req instanceof QuestLineStepCompletedRequirement) {
        return requirementRegion(App.game.quests.getQuestLine(req.questLineName)?.requirement, path);
    }
    if (req instanceof ClearDungeonRequirement) {
        return townUnlockRegion(TownList[GameConstants.RegionDungeons.flat()[req.dungeonIndex]], path);
    }
    if (req instanceof TemporaryBattleRequirement) {
        const battle = TemporaryBattleList[req.battleName];
        return Math.max(
            townUnlockRegion(battle?.getTown(), path),
            ...(battle?.requirements ?? []).map((r) => requirementRegion(r, path))
        );
    }
    return GameConstants.Region.kanto;
};

const subRegionUnlockRegion = (region, subRegion, path) => Math.max(
    region,
    requirementRegion(SubRegions.getSubRegionById(region, subRegion ?? 0)?.requirement, path)
);

const townUnlockRegion = (town, path = new Set()) => {
    if (!town) {
        return GameConstants.Region.kanto;
    }
    return Math.max(
        subRegionUnlockRegion(town.region, town.subRegion, path),
        ...town.requirements.map((r) => requirementRegion(r, path))
    );
};

const routeUnlockRegionCache = {};

// Routes in later subregions (e.g. Sevii Islands 4-7) use the region they unlock in
const routeUnlockRegion = (route, path = new Set()) => {
    const key = `${route.region}-${route.number}`;
    if (routeUnlockRegionCache[key] === undefined) {
        routeUnlockRegionCache[key] = Math.max(
            subRegionUnlockRegion(route.region, route.subRegion, path),
            ...route.requirements.map((r) => requirementRegion(r, path))
        );
    }
    return routeUnlockRegionCache[key];
};

const gymUnlockRegionCache = {};

// Gyms outside the main regions (Orange Islands, Orre, Magikarp Jump) use the region they unlock in
const gymUnlockRegion = (gym, path = new Set()) => {
    const gymRegion = GameConstants.getGymRegion(gym.town);
    if (gymRegion >= 0 && gymRegion < GameConstants.Region.final) {
        return gymRegion;
    }
    if (gymUnlockRegionCache[gym.town] === undefined) {
        gymUnlockRegionCache[gym.town] = Math.max(
            townUnlockRegion(gym.parent ?? TownList[gym.town], path),
            ...gym.requirements.map((r) => requirementRegion(r, path))
        );
    }
    return gymUnlockRegionCache[gym.town];
};

// Badge classes for each kind of town content, styled in styles.css
const townContentBadgeClasses = {
    gym: 'town-badge-gym',
    dungeon: 'town-badge-dungeon',
    battle: 'town-badge-battle',
    facility: 'town-badge-facility',
    shop: 'town-badge-shop',
    travel: 'town-badge-travel',
    other: 'town-badge-other',
};

const getTownContentCategory = (content) => {
    switch (content.constructor.name) {
        case 'Gym':
        case 'AccessGym':
            return 'gym';
        case 'MoveToDungeon':
            return 'dungeon';
        case 'TemporaryBattle':
            return 'battle';
        case 'MoveToTown':
            return 'travel';
        case 'BattleFrontierTownContent':
        case 'DreamOrbTownContent':
        case 'BattleCafe':
        case 'SafariTownContent':
            return 'facility';
        default:
            return content instanceof Shop ? 'shop' : 'other';
    }
}

// Label and optional wiki link for a town content badge
const getTownContentLink = (content) => {
    const type = content.constructor.name;
    switch (type) {
        case 'Gym':
            return { text: content.buttonText, href: `#!Gyms/${content.town}` };
        case 'AccessGym':
            return { text: content.gym.buttonText, href: `#!Gyms/${content.gym.town}` };
        case 'MoveToDungeon':
            return { text: content.text(), href: `#!Dungeons/${content.text()}` };
        case 'TemporaryBattle':
            return { text: content.getDisplayName(), href: `#!Temporary_Battles/${content.name}` };
        case 'MoveToTown':
            return { text: `→ ${content.text()}` };
        case 'BattleFrontierTownContent':
            return { text: 'Battle Frontier', href: '#!Battle_Frontier' };
        case 'DreamOrbTownContent':
            return { text: 'Dream Orbs', href: '#!Dream_Orbs' };
        case 'BattleCafe':
            return { text: 'Battle Café', href: '#!Battle_Cafe' };
        default:
            return { text: GameConstants.camelCaseToString(type.replace(/(MoveTo|TownContent|Temporary)/, '')) };
    }
}

// Shops and traders get their own tables on the town page, so they're left out of the content badges
const hasTownShopTable = (content) => (content instanceof Shop && content.items.length > 0)
    || content instanceof ShardTraderShop || content instanceof GemMasterShop || content instanceof GenericTraderShop;

const getTownContentBadge = (content) => ({
    ...getTownContentLink(content),
    badgeClass: townContentBadgeClasses[getTownContentCategory(content)],
});

module.exports = {
    requirementHints,
    getEvolutionHints,
    getRegionName,
    getLocationOverlaySVG,
    getRouteOverlaySVG,
    overlaySVG,
    getSafariSpriteId,
    unwrapRequirement,
    requirementRegion,
    townUnlockRegion,
    routeUnlockRegion,
    gymUnlockRegion,
    hasTownShopTable,
    getTownContentBadge,
}
