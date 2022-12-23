const markdownit          = require('markdown-it');
const imageSizePlugin = require('./markdown-plugins/image-size.js');
const linkBadgePlugin = require('./markdown-plugins/wiki-links-badge.js');
const linkPlugin      = require('./markdown-plugins/wiki-links.js');

// Setup our markdown editor
const md = new markdownit()
  .use(imageSizePlugin)
  .use(linkBadgePlugin)
  .use(linkPlugin);
md.renderer.rules.table_open = function(tokens, idx) {
  return '<table class="table table-hover table-striped table-bordered">';
};

window.md = md;

module.exports = md;
