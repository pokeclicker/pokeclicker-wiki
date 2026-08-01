var md     = require('markdown-it');
var Plugin = require('markdown-it-regexp');
var { segment } = require('../wiki-url');

var plugin = Plugin(
  // regexp to match
  /@\[\[([^\/\]]+)(\/([^\]]+))?\]\]/,

  // this function will be called when something matches
  (match, utils) => {
    return `<a class="badge text-bg-secondary" href="/${segment(match[1])}/${match[3] ? `${segment(match[3])}/` : ''}">${utils.escape(match[3] || match[1])}</a>`;
  }
);

module.exports = plugin;
