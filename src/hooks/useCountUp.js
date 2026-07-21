import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number counting up from 0 to `target` once the element scrolls
 * into view. Mirrors the original site's cubic-ease-out counter.
 *
 * @param {number} target - final value to count up to
 * @param {number} duration - animation duration in ms (default 1800)
 * @returns {[React.RefObject, number|string]} ref to attach + current displayed value
 */
export function useCountUp(target, duration = 1800) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const isDecimal = target % 1 !== 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = target * eased;
              setValue(isDecimal ? current.toFixed(1) : Math.floor(current));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return [ref, value];
}
