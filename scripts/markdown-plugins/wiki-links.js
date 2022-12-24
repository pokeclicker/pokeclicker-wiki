var md     = require('markdown-it');
var Plugin = require('markdown-it-regexp');

var plugin = Plugin(
  // regexp to match
  /\[\[([^\/\]]+)(\/([^\]]+))?\]\]/,

  // this function will be called when something matches
  (match, utils) => {
    return `<a href="#!${utils.escape(match[1])}/${utils.escape(match[3] || '')}">${utils.escape(match[3] || match[1])}</a>`;
  }
);

module.exports = plugin;
