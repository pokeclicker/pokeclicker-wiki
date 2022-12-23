var md     = require('markdown-it');
var Plugin = require('markdown-it-regexp');

var plugin = Plugin(
  // regexp to match
  /\[\[([^|\]]+)\/([^|\]]+)\]\]/,

  // this function will be called when something matches
  (match, utils) => {
    var url = `gotoPage('${utils.escape(match[1])}', '${utils.escape(match[2])}')`;

    return `<a href="#" onclick="${url}; return false;">${utils.escape(match[2])}</a>`;
  }
);

module.exports = plugin;
