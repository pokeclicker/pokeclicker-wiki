const { md } = require('./markdown-renderer');

const saveChanges = (editor, filename) => {
  const content = editor.value().split('\n').map(l => l.trimEnd()).join('\n');
  const originalContent = editor._rendered.value.split('\n').map(l => l.trimEnd()).join('\n');

  // If nothing has changed, just return
  if (content == originalContent) {
    Wiki.alert('No file changes detected..', 'warning', 3e3);
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

    // Check if the request was successfull
    if (rawResponse.status != 200) {
      Wiki.alert('Something went wrong trying to update this file, please try again later or check the console for more info.', 'danger', 1e4);
      return;
    }

    // Get our response as json
    const response = await rawResponse.json();

    // If there was any error messages
    if (response.error_msg) {
      console.error(response);
      Wiki.alert('Something went wrong trying to update this file, please try again later or check the console for more info.', 'danger', 1e4);
      return;
    }
  
    Wiki.alert('Successfully submitted your changes, please wait a few minutes for these changes to take affect', 'success', 2e4);

    // Take user back to non editor page
    window.location.hash = window.location.hash.replace(/\/+edit$/, '');
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
