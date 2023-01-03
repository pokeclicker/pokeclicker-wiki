
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

calculateVitamins = (att, steps, region) => {
    vitaminsUsed = {};
    data = [];
    totalVitamins = (region + 1) * 5;
    protein = totalVitamins + 1;
    while (protein-- > 0) {
        vitaminsUsed[GameConstants.VitaminType.Protein] = protein
        if (region < GameConstants.Region.hoenn) {
            // We can't access these yet
            vitaminsUsed[GameConstants.VitaminType.Calcium] = 0
            vitaminsUsed[GameConstants.VitaminType.Carbos] = 0
            const eff = getEff(vitaminsUsed, att, steps);
            // If the previous result is better than this, no point to continue
            if (eff < data[data.length - 1]?.eff) break;
            // Push our data
            data.push({
                protein,
                calcium: 0,
                carbos: 0,
                eff: getEff(vitaminsUsed, att, steps),
            });
        } else {
            calcium = (totalVitamins - protein) + 1;
            while (calcium-- > 0) {
                vitaminsUsed[GameConstants.VitaminType.Calcium] = calcium
                if (region < GameConstants.Region.unova) {
                    // We can't access these yet
                    vitaminsUsed[GameConstants.VitaminType.Carbos] = 0
                    const eff = getEff(vitaminsUsed, att, steps);
                    // If the previous result is better than this, no point to continue
                    if (eff < data[data.length - 1]?.eff) break;
                    // Push our data
                    data.push({
                        protein,
                        calcium,
                        carbos: 0,
                        eff,
                    });
                } else {
                    carbos = (totalVitamins - (protein + calcium)) + 1;
                    while (carbos-- > 0) {
                        vitaminsUsed[GameConstants.VitaminType.Carbos] = carbos
                        const eff = getEff(vitaminsUsed, att, steps);
                        // If the previous result is better than this, no point to continue
                        if (eff < data[data.length - 1]?.eff) break;
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
        }
    }
    return data;
}

const getBestVitamins = (att, step, region) => {
    const output = calculateVitamins(att, step, region);
    const max = Math.max(...output.map(i => i.eff));
    return output.find(o => o.eff == max);
}

module.exports = {
    getBestVitamins,
}