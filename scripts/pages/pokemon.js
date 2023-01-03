
getBreedingAttackBonus = (vitaminsUsed, baseAttack) => {
    const attackBonusPercent = (GameConstants.BREEDING_ATTACK_BONUS + vitaminsUsed[GameConstants.VitaminType.Calcium]) / 100;
    const proteinBoost = vitaminsUsed[GameConstants.VitaminType.Protein];
    return Math.floor((baseAttack * attackBonusPercent) + proteinBoost);
}

calcEggSteps = (vitaminsUsed, eggCycles) => {
    const div = 300;
    const extraCycles = (vitaminsUsed[GameConstants.VitaminType.Calcium] + vitaminsUsed[GameConstants.VitaminType.Protein]) / 2;
    const steps = (eggCycles + extraCycles) * GameConstants.EGG_CYCLE_MULTIPLIER;
    return steps <= div ? steps : Math.round(((steps / div) ** (1 - vitaminsUsed[GameConstants.VitaminType.Carbos] / 70)) * div);
}

getEff = (vitaminsUsed, baseAttack, eggCycles) => {
    return (getBreedingAttackBonus(vitaminsUsed, baseAttack) / calcEggSteps(vitaminsUsed, eggCycles)) * GameConstants.EGG_CYCLE_MULTIPLIER;
}

calculateVitamins = (baseAttack, eggCycles, region) => {
    // Add our initial starting eff here
    data = [{
        protein: 0,
        calcium: 0,
        carbos: 0,
        eff: getEff([0,0,0], baseAttack, eggCycles),
    }];
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
                const eff = getEff([protein, calcium, carbos], baseAttack, eggCycles);
                // If the previous result is better than this, no point to continue
                if (eff < data[data.length - 1].eff) break;
                // Push our data
                data.push({
                    protein,
                    calcium,
                    carbos,
                    eff,
                });
            }
        }
    }
    return data;
}

const getBestVitamins = (baseAttack, eggCycles, region) => {
    const output = calculateVitamins(baseAttack, eggCycles, region);
    const max = Math.max(...output.map(i => i.eff));
    const results = output.filter(o => o.eff == max);
    // Favour Protein > Calcium due to price
    return results[results.length - 1];
}

module.exports = {
    getEff,
    calculateVitamins,
    getBestVitamins,
}