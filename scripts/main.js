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
  shopMon: require('./pages/shopMon'),
  dungeonTokens: require('./pages/dungeonTokens'),
  oakItems: require('./pages/oakItems'),
  gems: require('./pages/gems'),
  getDealChains: require('./pages/dealChains').getDealChains,
  ...require('./navigation'),
}

// Register a service worker to provide image fallbacks from pokeclicker.com
// Use a relative URL so this works under GitHub Pages subpaths (e.g. /pokeclicker-wiki/).
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('image-fallback-sw.js').catch((err) => {
    // Non-fatal; log for debugging only
    console.error('Service worker registration failed:', err);
  });
}
