const { applyDatatables } = require('../datatables');
const { unwrapRequirement, routeUnlockRegion, gymUnlockRegion } = require('../gameHelper');
const { routeAvgHp } = require('./gems');

// Bumped whenever the table needs to be rebuilt (filters or weather changed)
const tableVersion = ko.observable(0);
const maxRegion = ko.observable(GameConstants.MAX_AVAILABLE_REGION);
const maxHealth = ko.observable('').extend({ rateLimit: { timeout: 500, method: 'notifyWhenChangesStop' } });

// Copied from Party.gainExp
const expPerDefeat = (pokemonName, level, trainer) => {
    const trainerBonus = trainer ? 1.5 : 1;
    return Math.floor(PokemonHelper.getPokemonByName(pokemonName).exp * level * trainerBonus / 9);
};

// Copied from Breeding.progressEggsBattle
const eggStepsPerDefeat = (route, region) => +Math.sqrt(MapHelper.normalizeRoute(route, region)).toFixed(2);

// Checks the requirements that change over time (weather, day of week, events),
// all other requirements (quests, obtained Pokémon, etc) are assumed to be met
const isRequirementMet = (requirement, weather, day) => {
    const req = unwrapRequirement(requirement);
    if (!req) {
        return true;
    }
    if (req instanceof MultiRequirement) {
        return req.requirements.every((r) => isRequirementMet(r, weather, day));
    }
    if (req instanceof OneFromManyRequirement) {
        return req.requirements.some((r) => isRequirementMet(r, weather, day));
    }
    if (req instanceof WeatherRequirement) {
        return req.weather.includes(weather);
    }
    if (req instanceof DayOfWeekRequirement) {
        return req.DayOfWeekNum === day;
    }
    if (req instanceof SpecialEventRequirement || req instanceof SpecialEventRandomRequirement) {
        return false;
    }
    return true;
};

// Mirrors RouteHelper.getAvailablePokemonList/getAvailablePokemonWeightList, assuming the Super Rod is obtained
const getRouteEncounters = (route, weather, day) => {
    const encounters = [...route.pokemon.land, ...route.pokemon.water, ...route.pokemon.headbutt]
        .map((name) => ({ name, weight: 1 }));
    route.pokemon.special
        .filter((special) => isRequirementMet(special.req, weather, day))
        .forEach((special) => special.pokemon.forEach((name) => encounters.push({ name, weight: special.weight ?? 1 })));
    return encounters;
};

const getRouteRow = (route, day) => {
    const weather = Weather.regionalWeather[route.region].peek();
    const encounters = getRouteEncounters(route, weather, day);
    const level = PokemonFactory.routeLevel(route.number, route.region);
    const totalWeight = encounters.reduce((sum, e) => sum + e.weight, 0);
    const avgExp = encounters.reduce((sum, e) => sum + e.weight * expPerDefeat(e.name, level, false), 0) / totalWeight;

    // Health formula copied from PokemonFactory.generateWildPokemon
    const routeHealth = PokemonFactory.routeHealth(route.number, route.region);
    const avgHp = routeAvgHp(route.region, route.number);
    const maxHealth = Math.max(...encounters.map((e) => Math.round(routeHealth * (0.9 + (PokemonHelper.getPokemonByName(e.name).hitpoints / avgHp) / 10))));

    return {
        type: 'Route',
        name: route.routeName,
        displayName: route.routeName,
        region: route.region,
        subRegionName: SubRegions.getSubRegionById(route.region, route.subRegion ?? 0).name,
        unlockRegion: routeUnlockRegion(route),
        weather,
        maxHealth,
        avgExp,
        eggSteps: eggStepsPerDefeat(route.number, route.region),
    };
};

// Requirement-gated gym Pokémon are alternative versions of the same party (e.g. based on starter),
// so each is weighted by how many versions there are; a single version just adds to the party
const getGymEncounters = (gym, weather, day) => {
    const available = gym.pokemons.filter((p) => p.requirements.every((r) => isRequirementMet(r, weather, day)));
    const versions = new Set(available.filter((p) => p.requirements.length).map((p) => p.requirements.map((r) => r.hint()).join())).size;
    return available.map((p) => ({ ...p, weight: p.requirements.length ? 1 / versions : 1 }));
};

const getGymRow = (gymName, day) => {
    const gym = GymList[gymName];
    const town = gym.parent ?? TownList[gym.town];
    const region = town.region;
    const weather = Weather.regionalWeather[region].peek();
    const encounters = getGymEncounters(gym, weather, day);
    const totalWeight = encounters.reduce((sum, e) => sum + e.weight, 0);
    const avgExp = encounters.reduce((sum, e) => sum + e.weight * expPerDefeat(e.name, e.level, true), 0) / totalWeight;

    return {
        type: 'Gym',
        name: gymName,
        // Some leader names are numbered to keep them unique (e.g. "Kareign 2")
        displayName: `${gym.leaderName.replace(/\s*\d+$/, '')} (${town.name})`,
        region,
        subRegionName: SubRegions.getSubRegionById(town.region, town.subRegion).name,
        unlockRegion: gymUnlockRegion(gym),
        weather,
        maxHealth: Math.max(...encounters.map((e) => e.maxHealth)),
        avgExp,
        // Copied from GymBattle.defeatPokemon, gyms use a regionless "route" based on their badge
        eggSteps: eggStepsPerDefeat(gym.badgeReward * 3 + 1, GameConstants.Region.none),
    };
};

const buildRows = () => {
    const max = maxRegion.peek();
    // Allow digit separators such as 40_000 or 40,000
    const healthText = maxHealth.peek().replace(/[_,\s]/g, '');
    const healthLimit = healthText ? Number(healthText) : NaN;
    const day = GameHelper.today().getDay();

    const routeRows = Routes.regionRoutes
        .filter((route) => routeUnlockRegion(route) <= max)
        .map((route) => getRouteRow(route, day));

    const gymRows = GameConstants.RegionGyms.flat()
        .filter((gymName) => GymList[gymName]?.pokemons.length && gymUnlockRegion(GymList[gymName]) <= max)
        .map((gymName) => getGymRow(gymName, day));

    // Group by region, routes first; the table's initial sort keeps this order within a region
    return [...routeRows, ...gymRows]
        .filter((row) => isNaN(healthLimit) || row.maxHealth <= healthLimit)
        .sort((a, b) => a.region - b.region);
};

// Ignore dependencies so the table is only rebuilt through refreshTable
const getRows = () => ko.ignoreDependencies(buildRows);

const refreshTable = () => {
    const table = document.getElementById('experience-table');
    if (!table) {
        return;
    }
    // DataTables moves the rows around, so remove it before knockout re-renders the table
    if ($.fn.dataTable.isDataTable(table)) {
        $(table).DataTable().destroy();
    }
    tableVersion(tableVersion.peek() + 1);
    ko.tasks?.runEarly();
    applyDatatables();
};

const refreshWeather = () => {
    Weather.generateWeather(new Date());
    refreshTable();
};

maxRegion.subscribe(refreshTable);
maxHealth.subscribe(refreshTable);

module.exports = {
    tableVersion,
    maxRegion,
    maxHealth,
    getRows,
    refreshWeather,
};
