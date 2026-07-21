import { useEffect, useState, useRef } from 'react';

/**
 * Returns the id of the section currently scrolled into "active" position,
 * using the same 200px offset heuristic as the original vanilla-JS version.
 * Scroll handling is rAF-throttled to avoid layout thrashing.
 *
 * @param {string[]} sectionIds
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState('');
  const ticking = useRef(false);

  useEffect(() => {
    const compute = () => {
      let current = '';
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      });
      setActiveId(current);
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(compute);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    compute();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeId;
}
