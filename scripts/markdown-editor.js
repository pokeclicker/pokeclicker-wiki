const { md } = require('./markdown-renderer');

const createMarkDownEditor =  (elementID, filename) => {
  // No element specified
  if (!elementID || !filename) return;

  return new SimpleMDE({
    element: document.getElementById(elementID),
    previewRender: (input) => md.render(input),
    placeholder: "Type here...",
    toolbarTips: false,
    hideIcons: ['guide'],
    insertTexts: {
      image: ['[[File:', '|50px]]'],
      link: [`[[`, ']]'],
    },
    showIcons: [
      'bold', 'italic', 'heading', '|',
      'quote', 'unordered-list', 'ordered-list', '|',
      'link', 'image', 'table', 'horizontal-rule', '|',
      'preview', 'side-by-side', 'fullscreen',
    ],
    status: [
      'lines', 'words',
      {
        className: 'filename',
        defaultValue: function(el) {
          el.innerHTML = `Filename: <code>"${filename}"</code>`;
        },
      },
      {
        className: 'github',
        defaultValue: function(el) {
          el.innerHTML = `<a target="_BLANK" href="https://github.com/pokeclicker/pokeclicker-wiki/edit/main/${filename}">Edit on GitHub</a>`;
        },
      }
    ]
  });
}

module.exports = {
  createMarkDownEditor,
}
