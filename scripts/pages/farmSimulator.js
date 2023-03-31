const selectedPlot = ko.observable(undefined);
const selectedPlotIndex = ko.observable(undefined);
const plotLabelsEnabled = ko.observable(false);

const selectPlot = (plotIndex) => {
    selectedPlot(App.game.farming.plotList[plotIndex]);
    selectedPlotIndex(plotIndex);
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
        selectedPlot()._age(berryData?.growthTime[plotStage] ?? 0);
    }
}

const getPlotMutations = ko.pureComputed(() => {
    const plotMutations = App.game.farming.plotList.map((_) => []);

    App.game.farming.mutations.forEach((mutation) => {
        const mutationPlots = mutation.getMutationPlots();
        mutationPlots.forEach((plot) => {
            const berry = BerryType[mutation.mutatedBerry];
            const chance = mutation.mutationChance(plot) * App.game.farming.getMutationMultiplier() * App.game.farming.plotList[plot].getMutationMultiplier();
            plotMutations[plot].push({
                berry: berry,
                chance: chance,
                tooltip: `${berry} (${formatMutationChance(chance)})`,
            })
        });
    });

    return plotMutations;
});

const getAllPossibleMutations = ko.pureComputed(() => {
    return Array.from(new Set(getPlotMutations().flat().map(m => m.berry)));
});

const getSelectedPlotMutations = () => {
    if (!selectedPlot()) {
        return [];
    }

    return getPlotMutations()[selectedPlotIndex()];
}

const formatMutationChance = (chance) => {
    return `${+(chance * 100).toFixed(4)}%`;
};

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

const getPlotWanderers = ko.pureComputed(() => {
    return App.game.farming.plotList.map((plot) => {
        if (plot.berry === BerryType.None) {
            return [];
        }

        // remove base wanderers
        return plot.berryData.wander.filter(w => !Berry.baseWander.includes(w));
    });
});

const getAllPossibleWanderers = ko.pureComputed(() => {
    return Array.from(new Set(getPlotWanderers().flat()));
});

const getSelectedPlotWanderers = () => {
    if (!selectedPlot()) {
        return [];
    }

    return getPlotWanderers()[selectedPlotIndex()];
}

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

const getStageTimes = (calcTotalLifeTime = false) => {
    return ko.pureComputed(() => {
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
        const dummyPlot = new Plot(true, selectedPlot().berry, 0, selectedPlot().mulch, selectedPlot().mulchTimeLeft, selectedPlot().index);
        let totalLifeTime = 0;

        stages.forEach((stage, idx) => {
            const prevStageTime = idx == 0 ? 0 : App.game.farming.berryData[selectedPlot().berry].growthTime[idx - 1];
            const growthTime = App.game.farming.berryData[selectedPlot().berry].growthTime[idx] - prevStageTime;
            dummyPlot._age(growthTime);
            const growthMultiplier = App.game.farming.getGrowthMultiplier() * dummyPlot.getGrowthMultiplier();

            if (growthMultiplier == 0 || (petayaEffect && stage.stage == 'Wither')) {
                stages[idx].timeLeft = '∞';
            } else {
                const timeLeft = growthTime / growthMultiplier;
                stages[idx].timeLeft = GameConstants.formatTimeFullLetters(timeLeft + totalLifeTime);

                if (calcTotalLifeTime) {
                    totalLifeTime += timeLeft;
                }
            }
        });

        return stages;
    });
}

const getEmittingAura = ko.pureComputed(() => {
    if (!selectedPlot() || selectedPlot()._berry() == -1 || selectedPlot().emittingAura.type() == null) {
        return '-';
    }
    return `${AuraType[selectedPlot().emittingAura.type()]}: ${selectedPlot().berry === BerryType.Micle
        ? `+${(selectedPlot().emittingAura.value() * 100).toFixed(2)}%`
        : `×${selectedPlot().emittingAura.value().toFixed(2)}`}`;
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
    const data = {
        plots: App.game.farming.plotList.map((plot) => {
            return {
                berry: plot.berry,
                age: plot.age,
                mulch: plot.mulch,
            };
        }),
        oakItems: {},
    };

    [OakItemType.Sprayduck, OakItemType.Squirtbottle].forEach((t) => {
        const oakItem = App.game.oakItems.itemList[t];
        data.oakItems[t] = {
            level: oakItem.level,
            active: oakItem.isActive,
        };
    });

    prompt('Save the below text to restore the farm to this state.', btoa(JSON.stringify(data)));
};

const importFarmPrompt = () => {
    const input = prompt();
    if (input) {
        importFarm(input);
    }
};

const importFarm = (str) => {
    const data = JSON.parse(atob(str));
    App.game.farming.plotList.forEach((plot, idx) => {
        plot._berry(data.plots[idx].berry);
        plot._age(data.plots[idx].age);
        plot._mulch(data.plots[idx].mulch);
    });
    Object.keys(data.oakItems).forEach((key) => {
        const oakItem = App.game.oakItems.itemList[key];
        if (oakItem) {
            oakItem.level = data.oakItems[key].level;
            oakItem.isActive = data.oakItems[key].active;
        }
    });
};

module.exports = {
    selectedPlot,
    plotLabelsEnabled,
    selectPlot,
    getImage,
    setPlotBerry,
    setPlotStage,
    getPlotMutations,
    getAllPossibleMutations,
    getSelectedPlotMutations,
    formatMutationChance,
    getExternalAuras,
    getPlotWanderers,
    getAllPossibleWanderers,
    getSelectedPlotWanderers,
    getHarvestAmount,
    getFarmPointAmount,
    getBerryColor,
    getFlavorValue,
    getStageTimes,
    getEmittingAura,
    getReceivedAuras,
    clearAllPlots,
    exportFarm,
    importFarmPrompt,
}
