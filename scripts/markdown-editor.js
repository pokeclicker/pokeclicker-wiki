const { md } = require('./markdown-renderer');

const saveChanges = (editor, filename) => {
  const content = editor.value().split('\n').map(l => l.trimEnd()).join('\n');
  const originalContent = editor._rendered.value.split('\n').map(l => l.trimEnd()).join('\n');
  // If nothing has changed, just return
  if (content == originalContent) {
    // TODO: some sort of error message?
    return;
  }
  // Update the file contents
  (async () => {
    const formData = new FormData();
    formData.append('path', filename);
    formData.append('content', content);
    const rawResponse = await fetch('https://discord.pokeclicker.com/github', {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    if (rawResponse.status != 200) {
      // TODO: some sort of error message?
      return;
    }
    const response = await rawResponse.json();

    // Update our "original content"
    editor._rendered.value = content;
  })();
}

const createMarkDownEditor =  (elementID, filename) => {
  // No element specified
  if (!elementID || !filename) return;

  const element = document.getElementById(elementID);

  return new SimpleMDE({
    element,
    previewRender: (input) => md.render(input),
    placeholder: "Type here...",
    toolbar: [
      'bold', 'italic', 'heading', '|',
      'quote', 'unordered-list', 'ordered-list', '|',
      'link', 'image', 'table', 'horizontal-rule', '|',
      'preview', 'side-by-side', 'fullscreen', '|',
      {
        name: 'saveChanges',
        action: (e) => { saveChanges(e, filename) },
        className: 'fa fa-floppy-o',
        title: 'Save Changes',
      },
    ],
    hideIcons: ['guide'],
    insertTexts: {
      image: ['[[File:', '|50px]]'],
      link: [`[[`, ']]'],
    },
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
