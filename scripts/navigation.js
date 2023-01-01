const { md } = require('./markdown-renderer');

// Load our error page for when we need it
errorPage = '';
$.get('404.html', (data) => {
  errorPage = data;
}).fail(() => {
  errorPage = '<h1>Page not found</h1>';
});

// Setup our pages observables
const pageType = ko.observable();
const pageName = ko.observable();
const applyBindings = ko.observable(false);

// This is our main function for changing pages
// Look at onhashchange for what happens after
const gotoPage = (type, name, other) => {
  // Update our page hash, so if we reload it will load this page
  window.location.hash = `#!${encodeURI(type).replace(/%20/g, '_')}/${encodeURI(name).replace(/%20/g, '_')}${other ? `/${other}`: ''}`;
};

// When the hash changes, we will load the new page
// This also allows us to go forwards and back in history
onhashchange = (event) => {
  if (!event.oldURL.includes('#!')) {
    return;
  }
  if (!event.newURL.includes('#!') && event.oldURL.includes('#!')) {
    // Change the url back to the current page
    location.hash = event.oldURL.replace(/.*#!/, '#!');
    // Scroll to the element they wanted to view
    const el = document.getElementById(event.newURL.replace(/.*#/, ''));
    if (el) {
      const navEl = document.getElementById('nav-bar');
      const y = (el?.getBoundingClientRect()?.top || 0) - (navEl?.scrollHeight || 0)
      scrollBy(0, y);
    }
    return;
  }
  const [ type, name, other ] = event.newURL.replace(/.*#!/, '').split('/').map(i => decodeURI(i || '').replace(/_/g, ' '));
  if (type == 'loading') {
    return;
  }
  pageType(type);
  pageName(name);
  const pageElement = $('#wiki-page-content');
  pageElement.html('');
  // Loading...
  const template = document.querySelector('#loading');
  const clone = template.content.cloneNode(true);
  pageElement.append(clone);
  let page = '';
  if (!pageType() && !pageName()) {
    page = 'pages/home.html';
  } else if (!pageName()) {
    page = `pages/${encodeURIComponent(pageType())}/overview.html`;
  } else {
    page = `pages/${encodeURIComponent(pageType())}/main.html`;
  }
  $.get(page, (data) => {
    pageElement.html(data);
    applyBindings(true);
  }).fail(() => {
    pageType('Page not found');
    pageName('');
    pageElement.html(errorPage);
  });

  const cleanFileName = (s) => s.replace(/[^\s\w\(\)'"!-]/gi, "-");

  const pageElementCustom = $('#wiki-page-custom-content');
  pageElementCustom.html('');
  $.get(`data/${cleanFileName(pageType())}/${cleanFileName(pageName() || 'overview')}.md`, (data) => {
    if (other == 'edit') {
      pageElementCustom.html(`<textarea style="width: 100%;height: 500px;" oninput="document.getElementById('preview-edit').innerHTML = md.render(this.value)">${data}</textarea><div id="preview-edit">${md.render(data)}</div>`);
    } else {
      pageElementCustom.html(md.render(data));
    }
  }).fail(() => {
    if (other == 'edit') {
      pageElementCustom.html(`<textarea style="width: 100%;height: 500px;" oninput="document.getElementById('preview-edit').innerHTML = md.render(this.value)"></textarea><div id="preview-edit"></div>`);
    } else {
      pageElementCustom.html('');
    }
  });
};

$('document').off('ready');
$(document).ready(() => {
  // Load the page the user is trying to visit
  const [type, name] = window.location.hash.substr(2).split('/');
  window.location.hash = '#!loading';
  gotoPage(decodeURIComponent(type || ''), decodeURIComponent(name || ''));

  ko.applyBindings({}, document.getElementById('nav-bar'));
  ko.applyBindings({}, document.getElementById('page-title'));
  ko.applyBindings({}, document.getElementById('breadcrumbs'));
  applyBindings.subscribe((v) => {
    // Unbind and re-bind knockout
    if (v) {
      applyBindings(false);
      ko.cleanNode(document.getElementById('wiki-page-content'));
      ko.applyBindings({}, document.getElementById('wiki-page-content'));
    }
  });
});

// Save any settings the user has set before they leave
window.onbeforeunload = () => {
  Settings.saveDefault();
};

module.exports = {
    pageType,
    pageName,
    gotoPage,
};
