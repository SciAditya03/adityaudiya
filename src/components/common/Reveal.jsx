import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';

/**
 * Generic scroll-reveal wrapper. Renders `as` (default "div") and attaches
 * the `reveal` (or `reveal-stagger`) global utility classes, toggling
 * `visible` once the element enters the viewport.
 *
 * This is the one addition to the requested file layout beyond what was
 * scaffolded: nearly every section needs the exact same "wrap in a reveal
 * container" behavior, so centralizing it here avoids re-deriving the
 * IntersectionObserver wiring in ten different section components.
 */
const Reveal = forwardRef(function Reveal(
  { as: Component = 'div', stagger = false, threshold = 0.15, className = '', children, ...rest },
  forwardedRef
) {
  const [ref, visible] = useRevealAnimation(threshold);
  const base = stagger ? 'reveal-stagger' : 'reveal';

  return (
    <Component
      ref={(node) => {
        ref.current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      className={`${base} ${visible ? 'visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
});

Reveal.propTypes = {
  as: PropTypes.elementType,
  stagger: PropTypes.bool,
  threshold: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Reveal;
