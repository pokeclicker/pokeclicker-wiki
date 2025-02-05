// routeAvgHp copied from PokemonFactory.generateWildPokemon
const routeAvgHp = (region, route) => {
    const poke = [...new Set(Object.values(Routes.getRoute(region, route).pokemon).flat().map(p => p.pokemon ?? p).flat())];
    const total = poke.map(p => pokemonMap[p].base.hitpoints).reduce((s, a) => s + a, 0);
    return total / poke.length;
};

const getStandardEncounters = (route) => {
    return Object.values(route.pokemon).flat().filter((p) => typeof p === 'string');
}

const maxRouteHp = (regionRoutes, routeName) => {
    const route = regionRoutes.find((r) => r.routeName === routeName);
    const allMons = getStandardEncounters(route);
    const maxHpStat = Math.max(...allMons.map((p) => PokemonHelper.getPokemonByName(p).hitpoints));
    return Math.round(PokemonFactory.routeHealth(route.number, route.region) * (0.9 + (maxHpStat / routeAvgHp(route.region, route.number)) / 10));
}

const maxGymHp = (gymName) => {
    return Math.max(...GymList[gymName].pokemons.map((p) => p.maxHealth));
}

const gemsPerPokemon = (pokemonName, gemType) => {
    const pokemon = PokemonHelper.getPokemonByName(pokemonName);
    const targetType = PokemonType[gemType];
    if (pokemon.type2 === PokemonType.None) {
        return pokemon.type1 === targetType ? 2 : 0;
    } else {
        return (pokemon.type1 === targetType || pokemon.type2 === targetType) ? 1 : 0;
    }
}

const gemsPerGymEncounter = (gymName, gemType) => {
    const gym = GymList[gymName];
    const totalMons = gym.pokemons.length;
    const totalGemsOfType = gym.pokemons.reduce((acc, p) => acc + 5 * gemsPerPokemon(p.name, gemType), 0);
    return totalGemsOfType / totalMons;
}

const gemsPerRouteEncounter = (route, gemType) => {
    const allMons = getStandardEncounters(route);
    const totalMons = allMons.length;
    const totalGemsOfType = allMons.reduce((acc, p) => acc + gemsPerPokemon(p, gemType), 0);
    return totalGemsOfType / totalMons;
}


const gemGymsPerFlute = (fluteType) => {
   const gemTypes = ItemList[fluteType]?.gemTypes || [];

    let validGyms = Object.keys(GymList)
        .map(name => {
            const region = GameConstants.getGymRegion(name);
            if (region > GameConstants.MAX_AVAILABLE_REGION && region < GameConstants.Region.final) {
                return null;
            }

            const gems = gemTypes
                .map(type => ({ type, amount: gemsPerGymEncounter(name, type) || 0 }))

            const totalGems = gems.reduce((sum, gem) => sum + gem.amount, 0);

            return totalGems > 0 ? { name, gems, totalGems } : null;
        })
        .filter(Boolean) 
        .sort((a, b) => b.totalGems - a.totalGems);


    return validGyms;
}

const bestGemsPerRegion = (region, gemType) => {
    const regionRoutes = Routes.regionRoutes.filter((r) => r.region == region);
    const allRouteGems = regionRoutes.map((route) => ({
        battleType: "Route",
        name: route.routeName,
        gemsPerEncounter: gemsPerRouteEncounter(route, gemType),
    }));

    const regionGyms = GameConstants.RegionGyms[region].filter((g) => !g.includes('Trial'));
    const allGymGems = regionGyms.map((gym) => ({
        battleType: "Gym",
        name: gym,
        gemsPerEncounter: gemsPerGymEncounter(gym, gemType),
    }));

    return allRouteGems.concat(allGymGems)
        .filter((battle) => battle.gemsPerEncounter > 0)
        .sort((a, b) => b.gemsPerEncounter - a.gemsPerEncounter)
        .splice(0, 2)
        .map((gemData) => {
            gemData.maxHealth = gemData.battleType === "Route" ? maxRouteHp(regionRoutes, gemData.name) : maxGymHp(gemData.name);
            return gemData;
        });
}

const bestCaptureRoutesPerRegion = (region, type) => {
    const regionRoutes = Routes.regionRoutes.filter((r) => r.region == region);
    const currentWeather = Weather.regionalWeather[region]();
    const today = GameHelper.today().getDay();
    const allRegionRoutesTypeCatchChance = regionRoutes.map((route) => {
        const normalEncounters = getStandardEncounters(route);
        const specialEncounters = route.pokemon.special.flatMap((special) => {
            if (special.req instanceof OneFromManyRequirement || special.req instanceof SpecialEventRandomRequirement) {
                // OneFromMany is Santa Jynx only
                return [];
            }
            if (special.req instanceof WeatherRequirement) {
                return special.req.weather.includes(currentWeather) ? special.pokemon : [];
            }
            if (special.req instanceof DayOfWeekRequirement) {
                return special.req.DayOfWeekNum === today ? special.pokemon : [];
            }
            if (special.req instanceof MultiRequirement) {
                // This might not cover all permutations of requirements
                if (special.req.requirements.find((req) => req instanceof SpecialEventRequirement)) return [];
                const weatherReq = special.req.requirements.find((req) => req instanceof WeatherRequirement);
                if (weatherReq) return weatherReq.weather.includes(currentWeather) ? special.pokemon : [];
                const dayReq = special.req.requirements.find((req) => req instanceof DayOfWeekRequirement);
                if (dayReq) return dayReq.DayOfWeekNum === today ? special.pokemon : [];
            }
            return special.pokemon
        });

        const allEncounters = normalEncounters.concat(specialEncounters);
        const typeCatchChances = allEncounters.map((p) => {
            const pokemon = PokemonHelper.getPokemonByName(p);
            return (pokemon.type1 === type || pokemon.type2 === type) ? PokemonFactory.catchRateHelper(pokemon.catchRate, true) : 0;
        });
        return {
            route: route,
            catchChances: typeCatchChances,
        };
    });

    const allRoutesWithType = allRegionRoutesTypeCatchChance.filter((route) => route.catchChances.some((chance) => chance > 0));
    const allRoutesWithCatchBonuses = allRoutesWithType.map((route) => {
        const encounters = route.catchChances.length;
        return {
            route: route.route,
            pokeball: route.catchChances.reduce((a, b) => a + b, 0) / encounters,
            ultraball: route.catchChances.map((chance) => chance > 0 ? chance + 10 : chance).reduce((a, b) => a + b, 0) / encounters,
            ultraballMagicBall: route.catchChances.map((chance) => chance > 0 ? chance + 20 : chance).reduce((a, b) => a + b, 0) / encounters,
        }
    });
    return allRoutesWithCatchBonuses
        .sort((a, b) => b.ultraballMagicBall - a.ultraballMagicBall)
        .splice(0, 2)
        .map((route) => {
            return {
                ...route,
                weather: currentWeather,
                today: today,
                maxHealth: maxRouteHp(regionRoutes, route.route.routeName),
            }
        });
}


module.exports = {
    bestGemsPerRegion,
    bestCaptureRoutesPerRegion,
    gemGymsPerFlute
}
