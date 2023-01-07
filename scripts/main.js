window.Wiki = {
  ...require('./datatables'),
  ...require('./game'),
  ...require('./typeahead'),
  ...require('./markdown-renderer'),
  pokemon: require('./pages/pokemon'),
  ...require('./navigation'),
}
