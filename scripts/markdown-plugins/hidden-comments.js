var md     = require('markdown-it');
var Plugin = require('markdown-it-regexp');

var plugin = Plugin(
  // regexp to match
  /<!--[^>]+-->/,

  // this function will be called when something matches
  (match, utils) => {
    return '';
  }
);

module.exports = plugin;
