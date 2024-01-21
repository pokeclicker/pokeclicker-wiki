const checkExist = setInterval(function() {
    if ($('.tablinks').length) {
        $('.tablinks')[0].click();
        clearInterval(checkExist);
    }
 }, 100);

const highestRoute = (region, weather) => {
    region = region;
    weather = weather;

    var routeArr = [];

    Routes.getRoutesByRegion(region).map(route => {
        const routes = Routes.getRoutesByRegion(region).map(r => MapHelper.normalizeRoute(r.number, region, false));
        var pkmon1 = [];
        pkmon1.push(Object.values(route.pokemon).flat());
        route.pokemon.special.forEach((element) => {
            if(element?.req instanceof ObtainedPokemonRequirement){
                pkmon1.push(Object.values(element.pokemon).flat());
            }
            if(element?.req instanceof WeatherRequirement){
                if(element.req.weather.includes(weather)){
                    pkmon1.push(Object.values(element.pokemon).flat());
                }
            }
            if(element?.req instanceof MultiRequirement){
                element.req.requirements.forEach(x => {
                    if(x instanceof WeatherRequirement){
                        if(x.weather.includes(weather)){
                            pkmon1.push(Object.values(element.pokemon).flat());
                        }
                    }
                });
            }

        });
        pkmon1 = Object.values(pkmon1).flat();
        pkmon1 = pkmon1.filter(e => e.constructor.name !== 'SpecialRoutePokemon');
        const pokemon = pkmon1.map(p=> pokemonMap[p]);
        const catchChanceAV = (Math.floor(pokemon.map(p => PokemonFactory.catchRateHelper(p.catchRate, true)).reduce((a,b) => a + b, 0) / pokemon.length))/100;
        const DT = Math.floor(PokemonFactory.routeDungeonTokens(route.number, region));
        const PB = (DT* catchChanceAV)/(2.25);
        const PBMB = (DT* (catchChanceAV+.1))/(2.25);
        const GB = (DT* (catchChanceAV+.05))/(2);
        const GBMB = (DT* (catchChanceAV+.15))/(2);
        const UB = (DT* (catchChanceAV+.1))/(1.75)
        const UBMB = (DT* (catchChanceAV+.2))/(1.75);
        routeArr.push( [Routes.getRoute(region,route.number).routeName, DT.toLocaleString(), +(PB). toFixed(2), +(PBMB). toFixed(2), +(GB). toFixed(2), +(GBMB). toFixed(2), +(UB). toFixed(2), +(UBMB). toFixed(2)] );
    })

    var highestPB = routeArr.reduce((max, dt) => {
        return dt[2] > max[2] ? dt : max;
    });
    var highestPBMB = routeArr.reduce((max, dt) => {
        return dt[3] > max[3] ? dt : max;
    });
    var highestGB = routeArr.reduce((max, dt) => {
        return dt[4] > max[4] ? dt : max;
    });
    var highestGBMB = routeArr.reduce((max, dt) => {
        return dt[5] > max[5] ? dt : max;
    });
    var highestUB = routeArr.reduce((max, dt) => {
        return dt[6] > max[6] ? dt : max;
    });
    var highestUBMB = routeArr.reduce((max, dt) => {
        return dt[7] > max[7] ? dt : max;
    });

    return( [[highestPB[0], highestPBMB[0], highestGB[0], highestGBMB[0], highestUB[0], highestUBMB[0]],routeArr] );
}

const setWeather = (evt, weather) => {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById('galar'+weather).style.display = "block";
    evt.currentTarget.className += " active";
    return;
}

module.exports = {
    highestRoute,
    setWeather,
};