const { md } = require('./markdown-renderer');
const { applyDatatables } = require('./datatables');
const { createMarkDownEditor } = require('./markdown-editor');
const redirections = require('./redirections');

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
const gotoPage = (type, name, other, noHistory) => {
  const hash = `#!${encodeURI(type).replace(/%20/g, '_')}/${encodeURI(name).replace(/%20/g, '_')}${other ? `/${other}`: ''}`;
  if (noHistory) {
    window.history.replaceState(null, null, hash);
    window.dispatchEvent(new HashChangeEvent('hashchange', {
      newURL: window.location.origin + window.location.pathname + window.location.hash,
      oldURL: window.location.origin + '#!',
    }));
    return;
  }
  // Update our page hash, so if we reload it will load this page
  window.location.hash = hash;
};

const gotoPageClick = (event, type, name, other) => {
  if (event.ctrlKey) { // don't navigate when holding CTRL key
    return true;
  }
  gotoPage(type, name, other);
  return false;
}

scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const navEl = document.getElementById('nav-bar');
    const y = (el?.getBoundingClientRect()?.top || 0) - (navEl?.scrollHeight || 0)
    scrollBy(0, y);
  }
}

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
    scrollToId(event.newURL.replace(/.*#/, ''));
    return;
  }
  
  const [match, path, _scrollElem] = (/.*#!([^#]*)#?(.*)/).exec(event.newURL) ?? [];
  const scrollElem = _scrollElem?.endsWith('/') ? _scrollElem.slice(0,-1) : _scrollElem
  let [ type, name, other ] = path.split('/').map(i => decodeURI(i || '').replace(/_/g, ' '));
  if (type == 'loading') {
    return;
  }
  const originalType = type;
  const originalName = name;
  let redirectTarget;
  let redirectCount = 0;
  while (redirectCount++ < 30 && (redirectTarget = redirections.redirect({type, name}))) {
    type = redirectTarget.type;
    name = redirectTarget.name;
    console.debug(`[Redirect ${redirectCount}] ${originalType}/${originalName} → ${type}/${name}`);
    //TODO: check for infinite loops, make sure we don't redirect to the same page
  }
  if (type !== originalType || name !== originalName) {
    gotoPage(type, name ?? '', other, true);
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
    scrollToId(scrollElem)
  }).fail(() => {
    pageType('Page not found');
    pageName('');
    pageElement.html(errorPage);
  });

  const cleanFileName = (s) => s.replace(/[^\s\w\(\)'"!-é]/gi, "-");

  const pageElementCustom = $('#wiki-page-custom-content');
  pageElementCustom.html('');
  let customContentFileName = `data/${cleanFileName(pageType())}/${cleanFileName(pageName() || 'overview')}.md`.replace(/\/+/g, '/');
  $.get(`data/${cleanFileName(pageType())}/${cleanFileName(pageName() || 'overview')}.md`, (data) => {
    if (other == 'edit') {
      pageElementCustom.html(`<textarea id="custom-edit">${data}</textarea>`);
    } else {
      pageElementCustom.html(md.render(data));
      scrollToId(scrollElem)
    }
  }).fail(() => {
    if (other == 'edit') {
      pageElementCustom.html(`<textarea id="custom-edit"></textarea>`);
    } else {
      pageElementCustom.html('');
    }
  }).always(() => {
    applyDatatables();
    if (other == 'edit') {
      // Initialise markdown editor
      createMarkDownEditor('custom-edit', customContentFileName);
    }
  });

  const pageElementCustomDescription = $('#wiki-page-custom-content-description');
  pageElementCustomDescription.html('');
  const customContentDescFileName = `data/${cleanFileName(pageType())}/${cleanFileName(pageName() || 'overview')}_description.md`.replace(/\/+/g, '/');
  $.get(customContentDescFileName, (data) => {
    if (other == 'edit') {
      pageElementCustomDescription.html(`<textarea id="custom-edit-desc">${data}</textarea>`);
    } else {
      pageElementCustomDescription.html(md.render(data));
      scrollToId(scrollElem)
    }
  }).fail(() => {
    if (other == 'edit') {
      pageElementCustomDescription.html(`<textarea id="custom-edit-desc"></textarea>`);
    } else {
      pageElementCustomDescription.html('');
    }
  }).always(() => {
    applyDatatables();
    if (other == 'edit') {
      // Initialise markdown editor
      createMarkDownEditor('custom-edit-desc', customContentDescFileName);
    }
  });
};

$('document').off('ready');
$(document).ready(() => {
  // Load the page the user is trying to visit
  const [type, name] = window.location.hash.substr(2).split('/');
  window.location.hash = '#!loading';
  gotoPage(decodeURIComponent(type || ''), decodeURIComponent(name || ''));

  ko.applyBindings({}, document.getElementById('tab-title'));
  ko.applyBindings({}, document.getElementById('nav-bar'));
  ko.applyBindings({}, document.getElementById('page-title'));
  ko.applyBindings({}, document.getElementById('page-table-of-contents'));
  ko.applyBindings({}, document.getElementById('breadcrumbs'));
  ko.applyBindings({}, document.getElementById('settings-modal'));
  ko.applyBindings({}, document.getElementById('footer'));

  applyBindings.subscribe((v) => {
    // Unbind and re-bind knockout
    if (v) {
      applyBindings(false);
      ko.cleanNode(document.getElementById('wiki-page-content'));
      ko.applyBindings({}, document.getElementById('wiki-page-content'));
      applyDatatables();
    }
  });

  // Search for pages
  document.getElementById('search').addEventListener('keyup', ({key, target}) => {
    if (key === 'Enter') {
      gotoPage('Search', target.value);
      target.value = '';
    }
  });
});

// clickable table rows - handle middle clicking
$(document).on('mousedown', 'tr.clickable', (e) => {
  // disable the auto scroll toggle from middle clicking
  if (e.button == 1 && $(e.currentTarget).data('href')) {
    e.preventDefault();
    return false;
  }
});

$(document).on('mouseup', 'tr.clickable', (e) => {
  if (e.target.tagName == 'A') {
    return true;
  }

  if (e.button == 1 || (e.button == 0 && e.ctrlKey)) {
    const href = $(e.currentTarget).data('href');
    if (href) {
      window.open(href, '_blank');
    }
  }
});

// Save any settings the user has set before they leave
window.onbeforeunload = () => {
  Settings.saveDefault();
};

module.exports = {
    pageType,
    pageName,
    gotoPage,
    gotoPageClick,
};
