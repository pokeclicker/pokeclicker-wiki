// URL building for wiki routes, shared with build/generate-static.js so both
// produce identical URLs. Spaces become underscores, everything else is percent-encoded.
const segment = (raw) => encodeURIComponent(String(raw).replace(/ /g, '_'));

const buildUrl = (type, name, { edit, anchor } = {}) => {
  if (!type && !name) {
    return edit ? '/?edit' : '/';
  }
  let url;
  if (type === 'Search' && name) {
    // Search queries are free text, pass them as a query param
    url = `/Search/?q=${encodeURIComponent(name)}`;
  } else {
    url = `/${segment(type)}/${name ? `${segment(name)}/` : ''}${edit ? '?edit' : ''}`;
  }
  return anchor ? `${url}#${encodeURIComponent(anchor)}` : url;
};

// Map a page type/name to its file name under data/
const cleanFileName = (s) => s.replace(/[^\s\w\(\)'"!-é]/gi, '-');

module.exports = {
  segment,
  buildUrl,
  cleanFileName,
};
