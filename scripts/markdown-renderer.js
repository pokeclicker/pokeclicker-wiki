const markdownit      = require('markdown-it');

// Setup our markdown editor
const md = new markdownit({
    breaks: true,
  })
  .use(require('markdown-it-multimd-table'), {
    rowspan:    true,
    headerless: true,
  })
  .use(require('markdown-it-container'), 'text-center')
  .use(require('markdown-it-container'), 'text-end')
  .use(require('markdown-it-container'), 'table-auto')
  .use(require('markdown-it-container'), 'table-tight')
  .use(require('./markdown-plugins/hidden-comments.js'))
  .use(require('./markdown-plugins/id-element.js'))
  .use(require('./markdown-plugins/image-size.js'))
  .use(require('./markdown-plugins/wiki-links-badge.js'))
  .use(require('./markdown-plugins/wiki-links.js'));
md.renderer.rules.table_open = function(tokens, idx) {
  return '<div class="table-responsive"><table class="table table-hover table-striped table-bordered">';
};
md.renderer.rules.table_close = function(tokens, idx) {
  return '</table></div>';
};

module.exports = {
  md,
}
