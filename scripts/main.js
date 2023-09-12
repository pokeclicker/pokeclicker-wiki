// import our version etc
const package = require('../pokeclicker/package.json');

window.Wiki = {
  package,
  ...require('./notifications'),
  ...require('./datatables'),
  ...require('./game'),
  ...require('./typeahead'),
  ...require('./markdown-renderer'),
  ...require('./discord'),
  ...require('./components'),
  gameHelper: require('./gameHelper'),
  pokemon: require('./pages/pokemon'),
  farm: require('./pages/farm'),
  items: require('./pages/items'),
  dreamOrbs: require('./pages/dreamOrbs'),
  farmSimulator: require('./pages/farmSimulator'),
  dungeons: require('./pages/dungeons'),
  pokemonDollars: require('./pages/shopMon'),
  dungeonTokens: require('./pages/dungeonTokens'),
  battlePoints: require('./pages/shopMon'),
  diamonds: require('./pages/shopMon'),
  oakItems: require('./pages/oakItems'),
  getDealChains: require('./pages/dealChains').getDealChains,
  ...require('./navigation'),
}
