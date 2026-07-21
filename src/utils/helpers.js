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
