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
  dreamOrbs: require('./pages/dreamOrbs'),
  dungeons: require('./pages/dungeons'),
  ...require('./navigation'),
}
