
const getBreedingAttackBonus = (vitaminsUsed, baseAttack) => {
    const attackBonusPercent = (GameConstants.BREEDING_ATTACK_BONUS + vitaminsUsed[GameConstants.VitaminType.Calcium]) / 100;
    const proteinBoost = vitaminsUsed[GameConstants.VitaminType.Protein];
    return (baseAttack * attackBonusPercent) + proteinBoost;
}

const calcEggSteps = (vitaminsUsed, eggCycles) => {
    const div = 300;
    const extraCycles = (vitaminsUsed[GameConstants.VitaminType.Calcium] + vitaminsUsed[GameConstants.VitaminType.Protein]) / 2;
    const steps = (eggCycles + extraCycles) * GameConstants.EGG_CYCLE_MULTIPLIER;
    return steps <= div ? steps : Math.round(((steps / div) ** (1 - vitaminsUsed[GameConstants.VitaminType.Carbos] / 70)) * div);
}

const getEfficiency = (vitaminsUsed, baseAttack, eggCycles) => {
    return (getBreedingAttackBonus(vitaminsUsed, baseAttack) / calcEggSteps(vitaminsUsed, eggCycles)) * GameConstants.EGG_CYCLE_MULTIPLIER;
}

const getBestVitamins = (baseAttack, eggCycles, region) => {
    const maxVitamins = (region + 1) * 5;
    // Only one attack vitamin ever makes sense for a given baseAttack
    const attackVitamin = (baseAttack > 100 && region >= GameConstants.Region.hoenn) ? GameConstants.VitaminType.Calcium : GameConstants.VitaminType.Protein;
    const startingCarbos = (region >= GameConstants.Region.unova ? maxVitamins : 0);
    let bestVitamins = [0, 0, startingCarbos];
    let bestEfficiency = getEfficiency(bestVitamins, baseAttack, eggCycles);
    for (let i = 1; i <= maxVitamins; i++) {
        const newVitamins = [0, 0, Math.max(startingCarbos - i, 0)];
        newVitamins[attackVitamin] = i;
        const newEfficiency = getEfficiency(newVitamins, baseAttack, eggCycles);
        // Using >= here prioritises the cheaper attack vitamin over carbos when there is a dead tie
        if (newEfficiency >= bestEfficiency) {
            bestEfficiency = newEfficiency;
            bestVitamins = newVitamins;
        }
    }

    return {
        protein: bestVitamins[GameConstants.VitaminType.Protein],
        calcium: bestVitamins[GameConstants.VitaminType.Calcium],
        carbos: bestVitamins[GameConstants.VitaminType.Carbos],
        eggSteps: calcEggSteps(bestVitamins, eggCycles),
        eff: bestEfficiency,
    }
}

const getAllAvailableShadowPokemon = () => {
    return Object.values(dungeonList)
        .filter(d => !TownList[d.name].requirements.some(req => req instanceof DevelopmentRequirement))
        .map(d => Wiki.dungeons.getDungeonShadowPokemon(d)).flat();
};

const battleCafeToHumanReadableString = (battleCafeLocation) => {
    const sweet = GameConstants.AlcremieSweet[battleCafeLocation.sweet];
    const sweetString = sweet ? sweet : 'Any Sweet';

    const spinEnum = GameHelper.enumStrings(GameConstants.AlcremieSpins)[battleCafeLocation.spin];
    const splitCamelCase = GameConstants.camelCaseToString(spinEnum).replace('3600', ' 3600');
    const commaSeperated = splitCamelCase.replaceAll(' ', ', ');
    const relativeSeconds = commaSeperated.replace('Above5', '5 or more').replace('Above10', '11 or more').replace('Below5', 'Less than 5');
    const spinWording = relativeSeconds.replace('At5', 'Dusk, Counterclockwise').replace('Any', 'Any direction');
    return `${sweetString} - ${spinWording} seconds`;
};

const getAvailablePokemon = () => {
    return pokemonList.filter(p =>
        p.id >= 0 &&
        Math.floor(p.id) <= GameConstants.MaxIDPerRegion[GameConstants.MAX_AVAILABLE_REGION] &&
        p.nativeRegion <= GameConstants.MAX_AVAILABLE_REGION &&
        Object.keys(PokemonLocations.getPokemonLocations(p.name)).length
    );
}

const getRouteRoamingChance = (region, subRegion, routeNumber) => {
    const group = RoamingPokemonList.findGroup(region, subRegion);
    const regionRoutes = Routes.getRoutesByRegion(region).filter(r => RoamingPokemonList.findGroup(region, r.subRegion || 0) == group);
    const routeIndex = regionRoutes.indexOf(Routes.getRoute(region, routeNumber));
    const maxRoute = regionRoutes.length - 1;
    const max = GameConstants.ROAMING_MAX_CHANCE;
    const min = GameConstants.ROAMING_MIN_CHANCE;
    return Math.floor((max + ((min - max) * (maxRoute - routeIndex) / (maxRoute))));
};

module.exports = {
    getBreedingAttackBonus,
    calcEggSteps,
    getEfficiency,
    getBestVitamins,
    getAvailablePokemon,
    getAllAvailableShadowPokemon,
    battleCafeToHumanReadableString,
    getRouteRoamingChance,
}
