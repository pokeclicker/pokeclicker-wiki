var md     = require('markdown-it');
var Plugin = require('markdown-it-regexp');

var plugin = Plugin(
  // regexp to match
  /\{#([\w-]+)\}/,

  // this function will be called when something matches
  (match, utils) => {
    return `<div id="${utils.escape(match[1])}"></div>`;
  }
);

module.exports = plugin;
