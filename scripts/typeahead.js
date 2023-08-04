const { gotoPage } = require('./navigation');

const searchOptions = [
  {
    display: 'Home',
    type: '',
    page: '',
  },
  {
    display: 'Wiki Guide',
    type: 'Wiki Guide',
    page: '',
  },
  {
    display: 'Battle Frontier',
    type: 'Battle Frontier',
    page: '',
  },
  // Pokémon
  {
    display: 'Pokémon',
    type: 'Pokémon',
    page: '',
  },
  ...Object.values(pokemonList).map(p => ({
    display: `#${Math.floor(p.id).toString().padStart(3, '0')} - ${p.name}`,
    type: 'Pokémon',
    page: p.name,
  })),
  {
    display: 'Mega Pokémon',
    type: 'Mega Pokémon',
    page: '',
  },
  // Dungeons
  {
    display: 'Dungeons',
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
    display: 'Gems',
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
    display: 'Berries',
    type: 'Berries',
    page: '',
  },
  ...App.game.farming.berryData.map(b => ({
    display: `${BerryType[b.type]} Berry`,
    type: 'Berries',
    page: BerryType[b.type],
  })),
  // Eggs
  {
    display: 'Eggs',
    type: 'Eggs',
    page: '',
  },
  // Items
  {
    display: 'Items',
    type: 'Items',
    page: '',
  },
  ...Object.values(ItemList).map(i => ({
    display: i.displayName,
    type: 'Items',
    page: i.displayName,
  })),
  ...UndergroundItems.list.filter((ui) => !Object.values(ItemList).some((i) => i.displayName == ui.displayName)).map(i => ({
    display: i.displayName,
    type: 'Items',
    page: i.displayName,
  })),
  // QuestLines
  {
    display: 'Quest Lines',
    type: 'Quest Lines',
    page: '',
  },
  ...App.game.quests.questLines().map(q => ({
    display: q.name,
    type: 'Quest Lines',
    page: q.name,
  })),
  // Battle Cafe
  {
    display: 'Battle Café',
    type: 'Battle Cafe',
    page: '',
  },
  // Vitamins
  {
    display: 'Vitamins',
    type: 'Vitamins',
    page: '',
  },
  // Hatchery
  {
    display: 'Hatchery',
    type: 'Hatchery',
    page: '',
  },
  // Hatchery Helpers
  {
    display: 'Hatchery Helpers',
    type: 'Hatchery Helpers',
    page: '',
  },
  ...HatcheryHelpers.list.map(h => ({
    display: h.name,
    type: 'Hatchery Helpers',
    page: h.name,
  })),
  // Events
  {
    display: 'Events',
    type: 'Events',
    page: '',
  },
  ...SpecialEvents.events.map(e => ({
    display: e.title,
    type: 'Events',
    page: e.title,
  })),
  // Regions
  {
    display: 'Regions',
    type: 'Regions',
    page: '',
  },
  ...GameHelper.enumStrings(GameConstants.Region).filter(r => !['none', 'final'].includes(r)).map(r => ({
    display: GameConstants.camelCaseToString(r),
    type: 'Regions',
    page: GameConstants.camelCaseToString(r),
  })),
  // Towns
  {
    display: 'Towns',
    type: 'Towns',
    page: '',
  },
  ...Object.values(TownList).map(t => ({
    display: t.name,
    type: 'Towns',
    page: t.name,
  })),
  // Gyms
  {
    display: 'Gyms',
    type: 'Gyms',
    page: '',
  },
  ...Object.entries(GymList).map(([key, gym]) => ({
    display: gym.leaderName,
    type: 'Gyms',
    page: key,
  })),
  // Routes
  {
    display: 'Routes',
    type: 'Routes',
    page: '',
  },
  ...Routes.regionRoutes.map(r => ({
    display: r.routeName,
    type: 'Routes',
    page: r.routeName,
  })),
  // Farm
  {
    display: 'Farm',
    type: 'Farm',
    page: '',
  },
  {
    display: 'Farm Simulator',
    type: 'Farm Simulator',
    page: '',
  },
  {
    display: 'Setups (Farm)',
    type: 'Farm',
    page: 'Setups',
  },
  // Pokérus
  {
    display: 'Pokérus',
    type: 'Pokérus',
    page: '',
  },
  // Dream Orbs
  {
    display: 'Dream Orbs',
    type: 'Dream Orbs',
    page: '',
  },
  // Rare Hold Items
  {
    display: 'Rare Hold Items',
    type: 'Rare Hold Items',
    page: '',
  },
  // Daily Deals
  {
    display: 'Daily Deals',
    type: 'Daily Deals',
    page: '',
  },
  // Deal Chains
  {
    display: 'Daily Deal Chains',
    type: 'Daily Deal Chains',
    page: ''
  },
  // Weather
  {
    display: 'Weather',
    type: 'Weather',
    page: '',
  },
  // Oak Itens
  {
    display: 'Oak Items',
    type: 'Oak Items',
    page: '',
  },
  ...App.game.oakItems.itemList.map(o => ({
    display: o.displayName,
    type: 'Oak Items',
    page: o.displayName,
  })),
  // Temporary Battles
  {
    display: 'Temporary Battles',
    type: 'Temporary Battles',
    page: '',
  },
  // Wandering Pokémon
  {
    display: 'Wandering Pokémon',
    type: 'Wandering Pokémon',
    page: '',
  },
  // Shiny Chance
  {
    display: 'Shiny Chance',
    type: 'Shiny Chance',
    page: '',
  },
  // Roaming Pokémon
  {
    display: 'Roaming Pokémon',
    type: 'Roaming Pokémon',
    page: '',
  },
  // Baby Pokémon
  {
    display: 'Baby Pokémon',
    type: 'Baby Pokémon',
    page: '',
  },
];
// Differentiate our different links with the same name
searchOptions.forEach(a => {
  const duplicates = searchOptions.filter(b => b.display == a.display);
  if (duplicates.length > 1) {
    duplicates.forEach(d => d.display = `${d.display} (${d.type})`);
  }
})

/*
    AUTO FILL FOR SEARCH BAR
*/

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&').replace(/[eé]/g, '[eé]');
}
// This is the function which figures out the results to show
var substringMatcher = (searchData) => {
  return (query, cb) => {
    // regex used to determine if a string contains the substring `q`
    const substrRegex = new RegExp(escapeRegExp(query), 'i');

    // iterate through the pool of strings and for any string that matches the regex
    const results = searchData.filter(d => substrRegex.test(d.display));

    cb(results.sort((a, b) => a.display.search(substrRegex) - b.display.search(substrRegex) || a.display.length - b.display.length));
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
    highlight: 'text-primary'
  },
},
{
  name: 'Search',
  limit: 8,
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

module.exports = { 
  searchOptions,
};
