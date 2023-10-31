const markdownit      = require('markdown-it');

// Setup our markdown editor
const md = new markdownit({
    breaks: true,
  })
  .use(require('markdown-it-multimd-table'), {
    rowspan:    true,
    headerless: true,
  })
  .use(require('markdown-it-attrs'), {
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: ['id', 'class'],
  })
  .use(require('markdown-it-mathjax3'))
  .use(require('markdown-it-container'), 'text-center')
  .use(require('markdown-it-container'), 'text-end')
  .use(require('markdown-it-container'), 'table-auto')
  .use(require('markdown-it-container'), 'table-tight')
  .use(require('markdown-it-container'), 'table-mutations')
  .use(require('markdown-it-container'), 'collapse', {

    validate: function(params) {
      return params.trim().match(/^collapsed?\s+(.*)$/);
    },
  
    render: function (tokens, idx) {
      const m = tokens[idx].info.trim().match(/^collapsed?\s+(.*)$/);

      if (tokens[idx].nesting === 1) {
        const randID = Rand.string(5);
        const startCollapsed = m[0].startsWith('collapsed');
        // opening tag
        return `
        <div class="accordion accordion-flush">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${randID}" aria-expanded="true">
              ${md.utils.escapeHtml(m[1])}
              </button>
            </h2>
            <div id="collapse-${randID}" class="accordion-collapse collapse ${!startCollapsed ? 'show' : ''}">
              <div class="accordion-body">\n`;
  
      } else {
        // closing tag
        return `</div></div></div>\n`;
      }
    }
  })
  .use(require('./markdown-plugins/hidden-comments.js'))
  .use(require('./markdown-plugins/image-size.js'))
  .use(require('./markdown-plugins/wiki-links-badge.js'))
  .use(require('./markdown-plugins/wiki-links.js'));
  
// Use this for default rendering
const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
md.renderer.rules.table_open = (tokens, idx, options, env, self) => {
  return '<div class="table-responsive"><table class="table table-hover table-striped table-bordered">';
};
md.renderer.rules.table_close = (tokens, idx, options, env, self) => {
  return '</table></div>';
};
md.renderer.rules.td_open = (tokens, idx, options, env, self) => {
  tokens[idx].attrPush(['class', 'align-middle']);
  return proxy(tokens, idx, options, env, self);
};

module.exports = {
  md,
}
