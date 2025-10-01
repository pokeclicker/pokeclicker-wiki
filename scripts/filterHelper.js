/** 
 * Helpers for common filtering cases.
 * FilterHelpers classes consolidate logic for checking the properties for complex (and differently structured) objects
 * and can check against multiple conditions at once.
 */


/** DUNGEON FILTERS */

class DungeonFilterHelper {
    constructor () {
        //add condition arrays as needed for new filter cases
        this.encounterConditions = [];
    }

    addEncounterFilter(filter) {
        this.encounterConditions.push(filter);
    }

    filterDungeons(dungeons) {
        return dungeons.filter(dungeon => {
            const mimicsAsLoot = dungeon.mimicList.length > 0 ? Object.values(dungeon.lootTable).flat().filter(loot => dungeon.mimicList.includes(loot.loot)) : [];
            const encounters = [].concat(dungeon.enemyList, dungeon.bossList, mimicsAsLoot);
            
            return encounters.some(DungeonFilterHelper.combineFilters(this.encounterConditions));
        });
    }
    
    filterEncounters(encounters, isMimic = false, lootTable = {}) {
        if (isMimic) {
            const mimicsAsLoot = encounters.length > 0 ? Object.values(lootTable).flat().filter(loot => encounters.includes(loot.loot)) : [];
            return mimicsAsLoot.filter(DungeonFilterHelper.combineFilters(this.encounterConditions))
        }

        return encounters.filter(DungeonFilterHelper.combineFilters(this.encounterConditions))
    }

    //helpers for creating filters
    static createHasRequirementFilter = (requirement) => { return (encounter) =>
        encounter.requirement ? matchesRequirement(encounter.requirement, requirement)
            : encounter.options?.requirement && matchesRequirement(encounter.options.requirement, requirement)
    };
    static createCheckByPokemonFilter = (checkPokemonBy) => { return (encounter) =>
        encounter.trainerClass === undefined && (typeof encounter === 'string' ? checkPokemonBy(encounter) : checkPokemonBy(encounter.pokemon || encounter.name || encounter.loot));
    };

    //filter that checks that an object meets all conditions
    static combineFilters = (filters) => { return (obj) => filters.every(f => f(obj)) };

};


/**
 * 
 * @param dungeons
 * @param filterBy - conditions to filter by, add properties as needed
 * @param {Requirement} filterBy.requirement
 * @param {function} filterBy.pokemonFilter - callback(pokemonName: string) => boolean
 * @param {boolean} filterEncounters - returns only encounters/pokemon that pass filters
 */
const filterDungeons = ({
    dungeons = Object.values(dungeonList).filter(dungeon => GameConstants.getDungeonRegion(dungeon.name) <= GameConstants.MAX_AVAILABLE_REGION),
    filterBy = {
        encounterRequirement: null,
        pokemonFilter: null,
    },
    filterEncounters = false, //returns only enemies that have this requirement
}) => {
    const dfh = new DungeonFilterHelper();
    if (filterBy.encounterRequirement) {
        dfh.addEncounterFilter(DungeonFilterHelper.createHasRequirementFilter(filterBy.encounterRequirement));
    }
    if (filterBy.pokemonFilter) {
        dfh.addEncounterFilter(DungeonFilterHelper.createCheckByPokemonFilter(filterBy.pokemonFilter));
    }

    let filteredDungeons = dfh.filterDungeons(dungeons);

    if (filterEncounters) {
        filteredDungeons = filteredDungeons.map( dungeon => ({
            ...dungeon,
            enemyList: dfh.filterEncounters(dungeon.enemyList),
            bossList: dfh.filterEncounters(dungeon.bossList),
            mimicList: dfh.filterEncounters(dungeon.mimicList, true, dungeon.lootTable)
        }));
    }

    return filteredDungeons;
}


/** ROUTE FILTERS */

class RouteFilterHelper {
    constructor () {
        //add condition arrays as needed for new filter cases
        this.encounterConditions = [];
        this.pokemonConditions = []; //used for encounters that can cover an array of pokemon - currently only applies to special encounters
    }

    addEncounterFilter(filter) {
        this.encounterConditions.push(filter);
    }

    addPokemonFilter(filter) {
        this.pokemonConditions.push(filter);
    }

    filterRoutes(routes) {
        return routes.filter(r => Object.values(r.pokemon).flat().some(RouteFilterHelper.combineFilters(this.encounterConditions)));
    }

    filterEncounters(encounters) {
        return encounters.filter(RouteFilterHelper.combineFilters(this.encounterConditions));
    }

    filterEncounterPokemon(pokemon) {
        return pokemon.filter(RouteFilterHelper.combineFilters(this.pokemonConditions));
    }

    //helpers for creating filters
    static createHasRequirementFilter = (requirement) => { return (encounter) => encounter.req && matchesRequirement(encounter.req, requirement); };
    static createCheckEncounterByPokemonFilter = (checkPokemonBy) => {
        return (encounter) => encounter.pokemon ? encounter.pokemon.some(checkPokemonBy) : checkPokemonBy(encounter);
    };

    //filter that checks that an object meets all conditions
    static combineFilters = (filters) => { return (obj) => filters.every(f => f(obj)) };
};


/**
 * 
 * @param routes
 * @param filterBy - conditions to filter by, add properties as needed
 * @param {Requirement} filterBy.requirement
 * @param {function} filterBy.pokemonFilter - callback(pokemonName: string) => boolean
 * @param {boolean} filterEncounters - returns only encounters/pokemon that pass filters
 */

const filterRoutes = ({
    routes = Routes.regionRoutes.filter(route => route.region <= GameConstants.MAX_AVAILABLE_REGION),
    filterBy = {
        encounterRequirement: null,
        pokemonFilter: null,
    },
    filterEncounters = false, 
}) => {
    const rfh = new RouteFilterHelper();

    if (filterBy.encounterRequirement) {
        rfh.addEncounterFilter(RouteFilterHelper.createHasRequirementFilter(filterBy.encounterRequirement));
    }
    if (filterBy.pokemonFilter) {
        rfh.addEncounterFilter(RouteFilterHelper.createCheckEncounterByPokemonFilter(filterBy.pokemonFilter));
        rfh.addPokemonFilter(filterBy.pokemonFilter);
    }

    let filteredRoutes = rfh.filterRoutes(routes);
    
    if (filterEncounters) {
        filteredRoutes = filteredRoutes.map(route => ({
            ...route, 
            pokemon: { 
                //encounters and pokemon are equivalent for land, water, headbutt; can skip additional pokemon filtering unless this changes
                land: rfh.filterEncounters(route.pokemon.land),
                water: rfh.filterEncounters(route.pokemon.water),
                headbutt: rfh.filterEncounters(route.pokemon.headbutt),
                special: rfh.filterEncounters(route.pokemon.special).map(s => ({
                    ...s,
                    pokemon: rfh.filterEncounterPokemon(s.pokemon)
                }))
            }
        }));
    }

    return filteredRoutes;
}

/** REQUIREMENT HELPERS */

//Finds a specific requirement type in a potential MultiRequirement
const findRequirementOfType = (requirement, type) => {
    if (requirement instanceof type) {
        return requirement;
    } else if (requirement instanceof MultiRequirement || requirement instanceof OneFromManyRequirement) {
        return requirement.requirements.find(r => findRequirementOfType(r, type));
    } else {
        return;
    }
}

const matchesRequirement = (reqToCheck, reqToMatch = new Requirement(), canMatchMulti = true) => {
    
    if (canMatchMulti && (reqToCheck instanceof MultiRequirement || reqToCheck instanceof OneFromManyRequirement)) {
        return reqToCheck.requirements.some(r => matchesRequirement(r, reqToMatch));
    } else if (reqToCheck instanceof WeatherRequirement && reqToMatch instanceof WeatherRequirement) {
        return reqToMatch.weather === undefined || reqToCheck.weather.some(w => reqToMatch.weather.includes(w));
    } else if (reqToCheck instanceof DayOfWeekRequirement && reqToMatch instanceof DayOfWeekRequirement) {
        return reqToMatch.DayOfWeekNum === undefined || reqToCheck.DayOfWeekNum === reqToMatch.DayOfWeekNum;
    } else if (reqToCheck instanceof SpecialEventRequirement && reqToMatch instanceof SpecialEventRequirement) {
        return reqToMatch.specialEventName === undefined || reqToCheck.specialEventName === reqToMatch.specialEventName;
    } else if (reqToCheck instanceof QuestLineStartedRequirement && reqToMatch instanceof QuestLineStartedRequirement) {
        return reqToMatch.questLineName === undefined || reqToMatch.questLineNamereqToCheck.questLineName === reqToMatch.questLineName;
    } else if (reqToCheck instanceof QuestLineCompletedRequirement && reqToMatch instanceof QuestLineCompletedRequirement) {
        return reqToMatch.questLineName === undefined || reqToCheck.questLineName === reqToMatch.questLineName;
    } else if (reqToCheck instanceof QuestLineStepCompletedRequirement && reqToMatch instanceof QuestLineStepCompletedRequirement) {
        return reqToMatch.questLineName === undefined || (reqToCheck.questLineName === reqToMatch.questLineName && reqToCheck.questIndex === reqToMatch.questIndex);
    } else {
        return false;
    }
};

module.exports = {
    filterRoutes,
    filterDungeons,
    matchesRequirement,
    findRequirementOfType,
}