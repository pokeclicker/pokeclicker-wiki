function getShopMons(currency) {
    var towns = Object.values(TownList).filter(t => t.region < GameConstants.Region.final);
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
        var test1 = filteredTowns[k].items.filter((c) => c.currency == currency && c instanceof PokemonItem)
        if (test1.length > 0) {
            test1.forEach(function(s) {
                filteredShops = [...filteredShops, [filteredTowns[k], s]];
            });
        }
    }
    return filteredShops;
}

module.exports = {
    getShopMons
};