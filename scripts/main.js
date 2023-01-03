window.Wiki = {
  ...require('./datatables'),
  ...require('./game'),
  ...require('./navigation'),
  ...require('./typeahead'),
  ...require('./markdown-renderer'),
  pokemon: require('./pages/pokemon'),
}
