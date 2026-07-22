/**
 * Resolves a path in `public/` against the deployment base.
 *
 * Vite rewrites asset URLs it can see at build time, but paths held as plain
 * strings in `constants.js` are invisible to it. On a root deploy the base is
 * "/" and this is a no-op; on a GitHub Pages project site the base is
 * "/adityaudiya/", and without this prefix every image would 404.
 *
 * Pass paths without a leading slash: asset('images/profile.jpg').
 */
export function asset(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`;
}

/**
 * Smoothly scrolls to a section given a hash target like "#work".
 * Shared by hero tags, nav links, and anywhere else that needs
 * the same click-to-scroll behavior as the original vanilla JS.
 */
export function scrollToTarget(target) {
  if (!target) return;
  const el = document.querySelector(target);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
