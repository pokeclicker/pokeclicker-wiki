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
  pokemon: require('./pages/pokemon'),
  farm: require('./pages/farm'),
  items: require('./pages/items'),
  dreamOrbs: require('./pages/dreamOrbs'),
  dungeons: require('./pages/dungeons'),
  ...require('./navigation'),
}
