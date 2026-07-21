import { useEffect, useRef, useState } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref. Once the element
 * crosses the given threshold it flips `visible` to true permanently
 * (matches the original site's one-shot reveal-on-scroll behavior) and stops
 * observing, since re-triggering isn't needed once revealed.
 *
 * Usage: const [ref, visible] = useRevealAnimation();
 *        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
 */
export function useRevealAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
