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
  dreamOrbs: require('./pages/dreamOrbs'),
  ...require('./navigation'),
}
