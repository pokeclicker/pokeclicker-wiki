const markdownit      = require('markdown-it');

// Setup our markdown editor
const md = new markdownit({
    breaks: true,
  })
  .use(require('./markdown-plugins/hidden-comments.js'))
  .use(require('./markdown-plugins/id-element.js'))
  .use(require('./markdown-plugins/image-size.js'))
  .use(require('./markdown-plugins/wiki-links-badge.js'))
  .use(require('./markdown-plugins/wiki-links.js'));
md.renderer.rules.table_open = function(tokens, idx) {
  return '<table class="table table-hover table-striped table-bordered">';
};

module.exports = {
  md,
}
