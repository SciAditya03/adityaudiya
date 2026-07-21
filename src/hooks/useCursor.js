import { useEffect, useRef } from 'react';

/**
 * Drives the custom cursor (dot + trailing outline + hover label).
 *
 * Performance notes:
 * - Mouse position is stored in refs, never React state, so mousemove never
 *   triggers a re-render.
 * - The outline's "lerp" trailing motion runs in a single requestAnimationFrame
 *   loop that reads/writes DOM styles directly.
 * - Hover labels use event delegation (`mouseover`/`mouseout` on `document`)
 *   so new elements with `data-cursor` never need to be re-bound manually.
 *
 * @param {string} hoverClassName - class toggled on the outline element while
 *   hovering a `data-cursor` target. Pass a CSS Module's scoped class name
 *   (e.g. `styles.hover`) since this hook manipulates the DOM directly and
 *   can't rely on a plain "hover" string matching a scoped module class.
 * @returns {{dotRef: React.RefObject, outlineRef: React.RefObject, labelRef: React.RefObject}}
 */
export function useCursor(hoverClassName = 'hover') {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const labelRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    const label = labelRef.current;
    if (!dot || !outline) return undefined;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animateOutline = () => {
      outlinePos.current.x += (mouse.current.x - outlinePos.current.x) * 0.15;
      outlinePos.current.y += (mouse.current.y - outlinePos.current.y) * 0.15;
      outline.style.left = `${outlinePos.current.x}px`;
      outline.style.top = `${outlinePos.current.y}px`;
      rafId.current = requestAnimationFrame(animateOutline);
    };

    const findCursorTarget = (e) =>
      e.target instanceof Element ? e.target.closest('[data-cursor]') : null;

    const handleMouseOver = (e) => {
      const target = findCursorTarget(e);
      if (!target) return;
      outline.classList.add(hoverClassName);
      if (label) label.textContent = target.getAttribute('data-cursor') || 'VIEW';
    };

    const handleMouseOut = (e) => {
      const target = findCursorTarget(e);
      if (!target) return;
      // Only clear hover if we're not moving to a nested element with the same ancestor
      const related = e.relatedTarget instanceof Element ? e.relatedTarget.closest('[data-cursor]') : null;
      if (related === target) return;
      outline.classList.remove(hoverClassName);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    rafId.current = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [hoverClassName]);

  return { dotRef, outlineRef, labelRef };
}
