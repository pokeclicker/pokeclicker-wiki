function getShopItemsByCurrencyAndFilter(currency, itemFilter) {
    var towns = Object.values(TownList).filter(t => t.region < GameConstants.MAX_AVAILABLE_REGION);
    var filteredTowns = [];
    var filteredShops = [];
    
    for (var j = 0; j < towns.length; j++){
        var test = towns[j].content.filter((c) => c instanceof Shop && c.items.length > 0);
        if (test.length > 0) {
            test.forEach(function(i) {
                filteredTowns = [...filteredTowns, i];
            });
        }
    }
    
    for (var k = 0; k < filteredTowns.length; k++){
        var test1 = filteredTowns[k].items.filter((c) => c.currency == currency && itemFilter(c))
        if (test1.length > 0) {
            test1.forEach(function(s) {
                filteredShops = [...filteredShops, [filteredTowns[k], s]];
            });
        }
    }
    return filteredShops;
}

function getShopMons(currency) {
    return getShopItemsByCurrencyAndFilter(currency, (x => x instanceof PokemonItem));
}

function getShopItems(currency) {
    return getShopItemsByCurrencyAndFilter(currency, (x => !(x instanceof PokemonItem)));
}

function getUniqueItems(currency) {
    const commonItems = pokeMartShop.items.map(x => x.name); // Items available at Explorers Poké Mart
    commonItems.push('Masterball', 'Protein', 'Calcium', 'Carbos', 'Wonder_Chest', 'Miracle_Chest'); // Available at every League shop

    return getShopItemsByCurrencyAndFilter(currency, (x => !(x instanceof PokemonItem || commonItems.includes(x.name))));
}

module.exports = {
    getShopMons,
    getShopItems,
    getUniqueItems,
};