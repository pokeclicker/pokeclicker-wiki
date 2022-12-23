var md     = require('markdown-it');
var Plugin = require('markdown-it-regexp');

var plugin = Plugin(
  // regexp to match (specify height or width)
  /\[\[File:([^\|\]]+)(\|(\d+)(px)?)?\]\]/,

  // this function will be called when something matches
  (match, utils) => {
    var url = `./images/${utils.escape(match[1])}`;

    return `<img src="${url}" ${match[3] ? `width="${match[3]}px"` : ''}/>`;
  }
);

module.exports = plugin;
