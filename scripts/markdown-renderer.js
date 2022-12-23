const markdownit          = require('markdown-it');
const wikiLinkPlugin      = require('./markdown-plugins/wiki-links.js');
const wikiLinkBadgePlugin = require('./markdown-plugins/wiki-links-badge.js');

// Setup our markdown editor
const md = new markdownit()
  .use(wikiLinkBadgePlugin)
  .use(wikiLinkPlugin);
md.renderer.rules.table_open = function(tokens, idx) {
  return '<table class="table table-hover table-striped table-bordered">';
};

window.md = md;

module.exports = md;
