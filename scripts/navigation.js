const { md } = require('./markdown-renderer');
const { applyDatatables } = require('./datatables');
const { createMarkDownEditor } = require('./markdown-editor');
const redirections = require('./redirections');
const { buildUrl, cleanFileName } = require('./wiki-url');

// Load our error page for when we need it
let errorPage = '';
$.get('/pages/error.html', (data) => {
  errorPage = data;
}).fail(() => {
  errorPage = '<h1>Page not found</h1>';
});

// Setup our pages observables
const pageType = ko.observable();
const pageName = ko.observable();
const applyBindings = ko.observable(false);

// Parse a Location/URL into a route, accepting underscores, spaces or %20 in segments
const parseLocation = (loc) => {
  const [type, name] = loc.pathname.split('/').filter(Boolean)
    .map((s) => decodeURIComponent(s).replace(/_/g, ' '));
  const params = new URLSearchParams(loc.search);
  return {
    type: type || '',
    name: (type === 'Search' && params.get('q')) || name || '',
    edit: params.has('edit'),
    anchor: decodeURIComponent((loc.hash || '').replace(/^#/, '')),
  };
};

// Parse the old '#!Type/Name[/edit][#anchor]' format so old bookmarks and links still work
const parseLegacyHash = (hash) => {
  const [, path, rawAnchor] = (/#!([^#]*)#?(.*)/).exec(hash) ?? [];
  if (path === undefined) {
    return null;
  }
  const anchor = rawAnchor?.endsWith('/') ? rawAnchor.slice(0, -1) : rawAnchor;
  const [type, name, other] = path.split('/').map((i) => decodeURI(i || '').replace(/_/g, ' '));
  return { type: type || '', name: name || '', edit: other === 'edit', anchor: anchor || '' };
};

const scrollToId = (id) => {
  const el = id && document.getElementById(id);
  if (el) {
    // scroll-margin-top in styles.css accounts for the fixed navbar
    el.scrollIntoView();
  }
};

// Page content loads in async chunks that can shift the layout after we've
// scrolled to the anchor, so re-scroll whenever the content resizes until
// loading settles or the user scrolls themselves
let stopAnchorWatch = null;
const scrollToIdWhileLoading = (id) => {
  stopAnchorWatch?.();
  if (!id || typeof ResizeObserver === 'undefined') {
    scrollToId(id);
    return;
  }
  const cancelEvents = ['wheel', 'touchstart', 'keydown', 'mousedown']; // mousedown catches scrollbar drags
  const scrollIfDrifted = () => {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    // The target should sit scroll-margin-top below the top of the viewport
    const expected = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    if (Math.abs(el.getBoundingClientRect().top - expected) > 2) {
      el.scrollIntoView();
    }
  };
  const observer = new ResizeObserver(scrollIfDrifted);
  observer.observe(document.getElementById('main-content'));
  const stop = () => {
    observer.disconnect();
    cancelEvents.forEach((ev) => removeEventListener(ev, stop));
    removeEventListener('load', stop);
    clearTimeout(timer);
    stopAnchorWatch = null;
  };
  cancelEvents.forEach((ev) => addEventListener(ev, stop, { passive: true }));
  if (document.readyState !== 'complete') {
    // On initial page load, stop once everything (mainly images) has loaded
    addEventListener('load', stop, { once: true });
  }
  const timer = setTimeout(stop, 10000);
  stopAnchorWatch = stop;
};

// Pages and data files are fragments; getting a full document back means an
// SPA-fallback server returned index.html for a missing file, treat it as a 404
const isFallbackDocument = (data) => typeof data === 'string' && data.trimStart().toLowerCase().startsWith('<!doctype');

// Track the current route so anchor-only changes don't trigger a full re-render
let currentRoute = null;
const sameRoute = (a, b) => !!a && !!b && a.type === b.type && a.name === b.name && a.edit === b.edit;

// This is our main function for changing pages
// Same signature as the old hash router; 'other' was only ever 'edit'
const gotoPage = (type, name, other, noHistory) => {
  navigate({ type: type || '', name: name || '', edit: other === 'edit', anchor: '' }, noHistory);
};

const navigate = (route, replace) => {
  const url = buildUrl(route.type, route.name, route);
  const current = location.pathname + location.search + location.hash;
  if (sameRoute(route, currentRoute)) {
    // Already on this page, just update the URL and scroll
    if (url !== current) {
      window.history.pushState(null, '', url);
    }
    scrollToId(route.anchor);
    return;
  }
  if (replace || url === current) {
    window.history.replaceState(null, '', url);
  } else {
    window.history.pushState(null, '', url);
  }
  render(route);
  if (!route.anchor) {
    window.scrollTo(0, 0);
  }
};

const render = (route) => {
  let { type, name } = route;
  const { edit, anchor } = route;
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
  name = name ?? '';
  if (type !== originalType || name !== originalName) {
    // Update the address bar to the redirect target, keeping the anchor and edit state
    window.history.replaceState(null, '', buildUrl(type, name, { edit, anchor }));
  }
  currentRoute = { type, name, edit };
  pageType(type);
  pageName(name);
  // Keep the anchor in view while content loads
  scrollToIdWhileLoading(anchor);
  const pageElement = $('#wiki-page-content');
  pageElement.html('');
  // Loading...
  const template = document.querySelector('#loading');
  const clone = template.content.cloneNode(true);
  pageElement.append(clone);
  let page = '';
  if (!pageType() && !pageName()) {
    page = '/pages/home.html';
  } else if (!pageName()) {
    page = `/pages/${encodeURIComponent(pageType())}/overview.html`;
  } else {
    page = `/pages/${encodeURIComponent(pageType())}/main.html`;
  }
  const pageNotFound = () => {
    pageType('Page not found');
    pageName('');
    pageElement.html(errorPage);
  };
  $.get(page, (data) => {
    if (isFallbackDocument(data)) {
      pageNotFound();
      return;
    }
    pageElement.html(data);
    applyBindings(true);
  }).fail(pageNotFound);

  const fileBase = `/data/${cleanFileName(pageType())}/${cleanFileName(pageName() || 'overview')}`.replace(/\/+/g, '/');
  const loadCustomContent = (elementId, editorId, fileName) => {
    const element = $(`#${elementId}`);
    element.html('');
    $.get(fileName, (data) => {
      if (isFallbackDocument(data)) {
        data = '';
      }
      if (edit) {
        element.html(`<textarea id="${editorId}">${data}</textarea>`);
      } else {
        element.html(md.render(data));
      }
    }).fail(() => {
      if (edit) {
        element.html(`<textarea id="${editorId}"></textarea>`);
      } else {
        element.html('');
      }
    }).always(() => {
      applyDatatables();
      if (edit) {
        // Initialise markdown editor
        createMarkDownEditor(editorId, fileName);
      }
    });
  };
  loadCustomContent('wiki-page-custom-content', 'custom-edit', `${fileBase}.md`);
  loadCustomContent('wiki-page-custom-content-description', 'custom-edit-desc', `${fileBase}_description.md`);
};

// Render the page from the current URL, converting legacy '#!' URLs first
const renderFromLocation = () => {
  const legacy = location.hash.startsWith('#!') ? parseLegacyHash(location.hash) : null;
  const route = legacy ?? parseLocation(location);
  if (legacy) {
    window.history.replaceState(null, '', buildUrl(route.type, route.name, route));
  }
  if (sameRoute(route, currentRoute)) {
    // Only the anchor changed, just scroll
    scrollToId(route.anchor);
    return;
  }
  render(route);
};

// This also allows us to go forwards and back in history
window.onpopstate = () => renderFromLocation();

// Intercept clicks on internal links so they navigate within the SPA.
// Modified clicks (ctrl, middle, etc.) are left to the browser.
document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
    return;
  }
  const link = event.target.closest?.('a[href]');
  if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) {
    return;
  }
  const href = link.getAttribute('href');
  if (href === '#') {
    event.preventDefault();
    return;
  }
  if (href.startsWith('#!')) {
    // Legacy in-content link
    event.preventDefault();
    navigate(parseLegacyHash(href));
    return;
  }
  if (href.startsWith('#')) {
    // Same-page anchor
    event.preventDefault();
    window.history.pushState(null, '', href);
    scrollToId(decodeURIComponent(href.slice(1)));
    return;
  }
  if (link.origin !== location.origin) {
    return;
  }
  const url = new URL(link.href);
  if (url.hash.startsWith('#!')) {
    // Full-URL legacy link (https://wiki.pokeclicker.com/#!Type/Name)
    event.preventDefault();
    navigate(parseLegacyHash(url.hash));
    return;
  }
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts.length > 2 || /\.[a-z0-9]+$/i.test(parts[parts.length - 1] ?? '')) {
    // Not a wiki route, let the browser handle it
    return;
  }
  event.preventDefault();
  navigate(parseLocation(url));
});

// Called from the Discord sign-in links; the OAuth redirect lands on '/',
// so save the current page to return to after login
const storeLoginReturn = () => {
  sessionStorage.setItem('wiki-login-return', JSON.stringify({
    url: location.pathname + location.search + location.hash,
    time: Date.now(),
  }));
  return true; // let the link navigate to Discord
};

$('document').off('ready');
$(document).ready(() => {
  // Return the user to the page they were on before logging in
  const stored = sessionStorage.getItem('wiki-login-return');
  if (stored) {
    sessionStorage.removeItem('wiki-login-return');
    try {
      const returnTo = JSON.parse(stored);
      if (returnTo?.url?.startsWith('/') && Date.now() - returnTo.time < 10 * 60 * 1000
          && location.pathname === '/' && !location.hash) {
        window.history.replaceState(null, '', returnTo.url);
      }
    } catch (e) { /* ignore malformed stored value */ }
  }

  // Load the page the user is trying to visit
  renderFromLocation();

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

  let activeSearchEntry;
  // Search for pages
  document.getElementById('search').addEventListener('keyup', ({key, target}) => {
    if (key === 'Enter' && !activeSearchEntry) {
      gotoPage('Search', target.value);
      target.blur();
      target.value = '';
    } else {
      activeSearchEntry = document.querySelector('.tt-dataset .active');
    }
  });
});

const gotoPageClick = (event, type, name, other) => {
  if (event.ctrlKey) { // don't navigate when holding CTRL key
    return true;
  }
  gotoPage(type, name, other);
  return false;
}

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
    let href = $(e.currentTarget).data('href');
    if (href) {
      if (href.includes('#!')) {
        // Convert legacy '#!' targets so the new tab gets a real URL
        const route = parseLegacyHash(href.slice(href.indexOf('#!')));
        href = buildUrl(route.type, route.name, route);
      }
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
    buildUrl,
    storeLoginReturn,
};
