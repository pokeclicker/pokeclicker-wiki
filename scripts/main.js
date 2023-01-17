// import our version etc
const package = require('../pokeclicker/package.json');

window.Wiki = {
  package,
  ...require('./datatables'),
  ...require('./game'),
  ...require('./typeahead'),
  ...require('./markdown-renderer'),
  pokemon: require('./pages/pokemon'),
  ...require('./navigation'),
}
