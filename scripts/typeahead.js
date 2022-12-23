const searchOptions = [
  {
    display:'Home',
    type: '',
    page: '',
  },
  {
    display:'Settings',
    type: 'Settings',
    page: '',
  },
  // Items
  {
    display:'Items',
    type: 'Items',
    page: '',
  },
  ...Object.values(ItemList).map(i => ({
    display: i.displayName,
    type: 'Items',
    page: i.displayName,
  })),
  // Pokémon
  {
    display:'Pokémon',
    type: 'Pokemon',
    page: '',
  },
  ...Object.values(pokemonList).map(p => ({
    display: p.name,
    type: 'Pokemon',
    page: p.name,
  })),
  // Dungeons
  {
    display:'Dungeons',
    type: 'Dungeons',
    page: '',
  },
  ...Object.values(dungeonList).map(d => ({
    display: d.name,
    type: 'Dungeons',
    page: d.name,
  })),
  // Gems
  {
    display:'Gems',
    type: 'Gems',
    page: '',
  },
  ...GameHelper.enumStrings(PokemonType).filter(t => t != 'None').map(t => ({
    display: `${t} Gem`,
    type: 'Gems',
    page: t,
  })),
  // Berries
  {
    display:'Berries',
    type: 'Berries',
    page: '',
  },
  ...App.game.farming.berryData.map(b => ({
    display: `${BerryType[b.type]} Berry`,
    type: 'Berries',
    page: BerryType[b.type],
  })),
];


/*
    AUTO FILL FOR SEARCH BAR
*/

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
// This is the function which figures out the results to show
var substringMatcher = function(searchData) {
  return function findMatches(query, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(escapeRegExp(query), 'ig');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    searchData.forEach((d, i) => {
      if (substrRegex.test(d.display)) {
        matches.push(d);
      }
    });
    cb(matches);
  };
};

// Initiate out autofill/typeahead
$('#search').typeahead({
  hint: true,
  highlight: true,
  minLength: 1,
  classNames: {
    menu: 'dropdown-menu',
    suggestion: 'dropdown-item',
    cursor: 'active',
  },
},
{
  name: 'Search',
  source: substringMatcher(searchOptions),
  display: 'display',
  templates: {
    notFound: '<a class="dropdown-item disabled">No results found...</a>',
  },
});
$('#search').bind('typeahead:select', (ev, suggestion) => {
  gotoPage(suggestion.type, suggestion.page);
});
$('#search').bind('typeahead:autocomplete', (ev, suggestion) => {
  gotoPage(suggestion.type, suggestion.page);
});

module.exports = searchOptions;
