
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

module.exports = {
    getBreedingAttackBonus,
    calcEggSteps,
    getEfficiency,
    getBestVitamins,
    getAllAvailableShadowPokemon,
}
