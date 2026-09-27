// Pages which can't be edited through the wiki's editor, as 'Type/Name' (or just 'Type' for its overview)
// NOTE: this is only enforced in the wiki itself, the save endpoint doesn't check it
// Matching ignores case, and underscores are treated as spaces (so they can be copied from the url)
const lockedPages = [
  '/',
  'Farm Simulator',
];

const pageKey = (type, name) => `${type || ''}/${name || ''}`.toLowerCase();

const lockedKeys = new Set(lockedPages.map((page) => {
  const [type, name] = page.replace(/_/g, ' ').split('/');
  return pageKey(type, name);
}));

const isPageLocked = (type, name) => lockedKeys.has(pageKey(type, name));

module.exports = {
  isPageLocked,
};
