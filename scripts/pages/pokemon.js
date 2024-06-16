
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
    // Add our initial starting eff here
    let res = {
        protein: 0,
        calcium: 0,
        carbos: 0,
        eff: getEfficiency([0,0,0], baseAttack, eggCycles),
    };
    vitaminsUsed = {};
    totalVitamins = (region + 1) * 5;
    // Unlocked at Unova
    carbos = (region >= GameConstants.Region.unova ? totalVitamins : 0) + 1;
    while (carbos-- > 0) {
        // Unlocked at Hoenn
        calcium = (region >= GameConstants.Region.hoenn ? totalVitamins - carbos: 0) + 1;
        while (calcium-- > 0) {
            protein = (totalVitamins - (carbos + calcium)) + 1;
            while (protein-- > 0) {
                const eff = getEfficiency([protein, calcium, carbos], baseAttack, eggCycles);
                // If the previous result is better than this, no point to continue
                if (eff < res.eff) break;
                // Push our data if same or better
                res = {
                    protein,
                    calcium,
                    carbos,
                    eff,
                };
            }
        }
    }
    return res;
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
        Object.keys(PokemonHelper.getPokemonLocations(p.name)).length
    );
}

module.exports = {
    getBreedingAttackBonus,
    calcEggSteps,
    getEfficiency,
    getBestVitamins,
    getAvailablePokemon,
    getAllAvailableShadowPokemon,
    battleCafeToHumanReadableString,
}
