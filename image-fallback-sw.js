/* global self */

// Import the auto-generated list of available image assets
// Use a relative path so this works when the site is hosted under a subdirectory.
importScripts('./scripts/imageAssets.js');

const IMAGE_EXT_REGEX = /\.(png|jpe?g|gif|svg|webp|ico)$/i;

self.addEventListener('install', (event) => {
  // Activate immediately on first load
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of existing clients as soon as possible
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  const isImageDestination = request.destination === 'image';
  const isImagePath = IMAGE_EXT_REGEX.test(url.pathname);
  const isSameOrigin = url.origin === self.location.origin;

  if (!isSameOrigin || (!isImageDestination && !isImagePath)) {
    return; // Let the network handle non-image or cross-origin requests
  }

  event.respondWith(handleImageRequest(request, url));
});

async function handleImageRequest(request, url) {
  const candidates = (self.POKEC_CLICKER_IMAGE_ASSETS || []);

  // Decode the pathname so spaces and other encoded characters match
  // our asset list entries (which use plain characters).
  let decodedPath = url.pathname;
  try {
    decodedPath = decodeURIComponent(decodedPath);
  } catch (e) {
    // If decoding fails, fall back to the raw pathname.
  }

  // If we're requesting from the local pokeclicker docs assets mirror,
  // shortcut to a 1:1 redirect to the live assets host.
  // e.g. /pokeclicker/docs/assets/images/npcs/Brock.png ->
  //      https://www.pokeclicker.com/assets/images/npcs/Brock.png
  const lowerFullPath = decodedPath.toLowerCase();
  const mirrorMarker = '/pokeclicker/docs/assets/images/';
  const mirrorIdx = lowerFullPath.indexOf(mirrorMarker);
  if (mirrorIdx !== -1) {
    const relativeFromMirror = decodedPath.slice(mirrorIdx + mirrorMarker.length);
    const mirrorUrl = `https://www.pokeclicker.com/assets/images/${relativeFromMirror}`;
    return Response.redirect(mirrorUrl, 302);
  }

  const fileName = decodedPath.split('/').pop().toLowerCase();

  // If this URL is already under an assets/images path, capture the
  // relative path (e.g. "shinypokemon/1.png") so we can prefer an
  // exact path match before falling back to basename-only matching.
  const marker = '/assets/images/';
  const lowerPath = lowerFullPath;
  let relativeUnderAssets = null;
  const idx = lowerPath.indexOf(marker);
  if (idx !== -1) {
    relativeUnderAssets = lowerPath.slice(idx + marker.length);
  }

  const bestPath = findClosestImagePath(fileName, candidates, relativeUnderAssets);

  if (!bestPath) {
    // No suitable remote asset; fall back to the original request
    return fetch(request);
  }

  // Prefer the remote asset when we have a good match.
  // Use an HTTP redirect so the browser performs a normal image load
  // from the remote origin (avoids CORS issues from fetching inside SW).
  const remoteUrl = `https://www.pokeclicker.com/assets/images/${bestPath}`;
  return Response.redirect(remoteUrl, 302);
}

function findClosestImagePath(fileName, candidates, originalRelativePath) {
  if (!candidates || !candidates.length || !fileName) {
    return null;
  }

  const lowerFileName = fileName.toLowerCase();
  const [requestedBase, requestedExt] = splitName(lowerFileName);

  // 0. If we know the original relative path under assets/images,
  //    prefer an exact path match first (e.g. "shinypokemon/1.png").
  if (originalRelativePath) {
    const target = originalRelativePath.toLowerCase();
    const exactPath = candidates.find((p) => p.toLowerCase() === target);
    if (exactPath) {
      return exactPath;
    }
  }

  // 1. Prefer exact filename (with or without leading slash)
  const exactMatches = candidates.filter((p) => {
    const lowerPath = p.toLowerCase();
    const base = lowerPath.split('/').pop();
    return base === lowerFileName;
  });

  if (exactMatches.length) {
    // Just pick the first exact match encountered
    return exactMatches[0];
  }

  // 2. Fuzzy match by simple Levenshtein distance on the basename
  //    Only consider candidates with the same extension and require a
  //    very small edit distance so we don't pick unrelated files.
  let best = null;
  let bestScore = Infinity;

  for (const path of candidates) {
    const base = path.split('/').pop().toLowerCase();
    const [candidateBase, candidateExt] = splitName(base);

    if (requestedExt && candidateExt && requestedExt !== candidateExt) {
      continue;
    }

    const score = levenshtein(requestedBase, candidateBase);
    if (score < bestScore) {
      bestScore = score;
      best = path;
    }
  }
  // Only accept *very* close matches to avoid wild mis-routes.
  // Require edit distance <= 2 on the basename.
  if (bestScore <= 2) {
    return best;
  }

  return null;
}

function splitName(name) {
	const lastDot = name.lastIndexOf('.');
	if (lastDot === -1) {
		return [name, ''];
	}
	return [name.slice(0, lastDot), name.slice(lastDot + 1)];
}

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;

  if (!m) return n;
  if (!n) return m;

  const dp = new Array(n + 1);
  for (let j = 0; j <= n; j += 1) {
    dp[j] = j;
  }

  for (let i = 1; i <= m; i += 1) {
    let prev = i - 1;
    dp[0] = i;
    for (let j = 1; j <= n; j += 1) {
      const temp = dp[j];
      const cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
      dp[j] = Math.min(
        dp[j] + 1,      // deletion
        dp[j - 1] + 1,  // insertion
        prev + cost,    // substitution
      );
      prev = temp;
    }
  }

  return dp[n];
}
