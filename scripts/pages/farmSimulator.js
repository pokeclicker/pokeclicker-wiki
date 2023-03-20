const selectedPlot = ko.observable(undefined);

const selectPlot = (plotIndex) => {
    selectedPlot(App.game.farming.plotList[plotIndex]);
    $('#plotList > .plot > .plot-content').removeClass('selected');
    $(`#plotList > .plot:eq(${plotIndex}) > .plot-content`).addClass('selected');
};

const getImage = (plot) => {
    if (plot.berry === BerryType.None) {
        return '';
    }
    if (plot.stage() === PlotStage.Seed) {
        return './images/farm/AllTreeSeed.png';
    } else if (plot.stage() === PlotStage.Sprout) {
        return './images/farm/AllTreeSprout.png';
    }
    return `./images/${BerryType[plot.berry]}Tree${PlotStage[plot.stage()]}.png`;
}

const setPlotBerry = (berry) => {
    if (selectedPlot() === undefined) {
        return;
    }
    selectedPlot()._berry(berry);
    setPlotStage(PlotStage.Berry);
}

const setPlotStage = (plotStage) => {
    if (selectedPlot() === undefined) {
        return;
    }
    if (plotStage == PlotStage.Seed) {
        selectedPlot()._age(0);
    } else {
        const berryData = App.game.farming.berryData[selectedPlot()._berry()];
        selectedPlot()._age(berryData.growthTime[plotStage]);
    }
}

const getPossibleMutations = ko.pureComputed(() => {
    const set = new Set();
    App.game.farming.mutations.forEach((mutation) => {
        const mutationPlots = mutation.getMutationPlots();
        if (mutationPlots.length) {
            set.add(BerryType[mutation.mutatedBerry]);
        }
    });
    return Array.from(set);
});

const getExternalAuras = ko.pureComputed(() => {
    const externalAuras = [];
    App.game.farming.externalAuras.forEach((aura, idx) => {
        if (!aura) {
            return;
        }
        if (aura() !== 1 && idx !== AuraType.Repel) {
            externalAuras.push(`${AuraType[idx]}: ×${aura().toFixed(2)}`);
        } else if (aura() !== 0 && idx === AuraType.Repel) {
            externalAuras.push(`${AuraType[idx]}: ${(aura() * 100).toFixed(2)}%`);
        }
    });

    return externalAuras;
});

const getPossibleWanderers = ko.pureComputed(() => {
    const set = new Set();
    App.game.farming.plotList.forEach((plot) => {
        if (plot.berry === BerryType.None) {
            return;
        }
        plot.berryData.wander.forEach((w) => set.add(w));
    });

    // remove base wanderers
    set.forEach((w) => {
        if (Berry.baseWander.includes(w)) {
            set.delete(w);
        }
    });

    return Array.from(set);
});

const getHarvestAmount = () => {
    if (!selectedPlot() || selectedPlot()._berry() == -1) {
        return '-';
    }
    return selectedPlot().harvestAmount().toLocaleString();
}

const getFarmPointAmount = () => {
    if (!selectedPlot() || selectedPlot()._berry() == -1) {
        return '-';
    }
    return App.game.farming.berryData[selectedPlot().berry].farmValue.toLocaleString();
}

const getBerryColor = () => {
    if (!selectedPlot() || selectedPlot()._berry() == -1) {
        return '-';
    }
    return BerryColor[App.game.farming.berryData[selectedPlot().berry].color];
}

const getFlavorValue = (flavorType) => {
    if (!selectedPlot() || selectedPlot()._berry() == -1) {
        return '-';
    }
    return App.game.farming.berryData[selectedPlot().berry].flavors.find(f => f.type === flavorType).value;
}

const getStageTimes = ko.pureComputed(() => {
    const stages = [
        { stage: 'Sprout', timeLeft: '-' },
        { stage: 'Taller', timeLeft: '-' },
        { stage: 'Bloom', timeLeft: '-' },
        { stage: 'Berry', timeLeft: '-' },
        { stage: 'Wither', timeLeft: '-' },
    ];

    if (!selectedPlot() || selectedPlot()._berry() == -1) {
        return stages;
    }

    const isPetaya = selectedPlot().berry === BerryType.Petaya;
    const petayaEffect = App.game.farming.berryInFarm(BerryType.Petaya, PlotStage.Berry, true) && !isPetaya;

    stages.forEach((stage, idx) => {
        const growthTime = App.game.farming.berryData[selectedPlot().berry].growthTime[idx];
        const growthMultiplier = App.game.farming.getGrowthMultiplier() * selectedPlot().getGrowthMultiplier();
        if (growthMultiplier == 0 || (petayaEffect && stage.stage == 'Wither')) {
            stages[idx].timeLeft = '∞';
        } else {
            stages[idx].timeLeft = GameConstants.formatTimeFullLetters(growthTime / growthMultiplier);
        }
    });

    return stages;
});

const getEmittingAura = ko.pureComputed(() => {
    if (!selectedPlot() || selectedPlot()._berry() == -1 || selectedPlot().emittingAura.type() == null) {
        return '-';
    }
    return `${AuraType[selectedPlot().emittingAura.type()]}: ${selectedPlot().berry === BerryType.Micle ? `+${(selectedPlot().emittingAura.value() * 100).toFixed(2)}%` : `×${selectedPlot().emittingAura.value().toFixed(2)}`}`;
});

const getReceivedAuras = ko.pureComputed(() => {
    if (!selectedPlot() || selectedPlot()._berry() == -1) {
        return '-';
    }

    const auras = selectedPlot().formattedAuras();
    return auras || '-';
});

const clearAllPlots = () => {
    if (!confirm('All plots will be cleared. Continue?')) {
        return;
    }

    App.game.farming.plotList.forEach((plot) => {
        plot._berry(BerryType.None);
        plot._mulch(MulchType.None);
    });
}

const exportFarm = () => {
    const data = App.game.farming.plotList.map((plot) => {
        return {
            berry: plot.berry,
            age: plot.age,
            mulch: plot.mulch,
        };
    });
    prompt('Save the below text to restore the farm to this state.', btoa(JSON.stringify(data)));
};

const importFarm = () => {
    const input = prompt();
    const data = JSON.parse(atob(input));
    App.game.farming.plotList.forEach((plot, idx) => {
        plot._berry(data[idx].berry);
        plot._age(data[idx].age);
        plot._mulch(data[idx].mulch);
    });
};


module.exports = {
    selectedPlot,
    getImage,
    selectPlot,
    setPlotBerry,
    setPlotStage,
    getPossibleMutations,
    getExternalAuras,
    getPossibleWanderers,
    getHarvestAmount,
    getFarmPointAmount,
    getBerryColor,
    getFlavorValue,
    getStageTimes,
    getEmittingAura,
    getReceivedAuras,
    clearAllPlots,
    exportFarm,
    importFarm,
}