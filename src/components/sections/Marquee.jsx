import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Marquee.module.css';

/**
 * One infinitely-scrolling row. The item list is rendered twice back-to-back
 * and the track is translated by exactly -50%, so the moment the first copy
 * scrolls out the second is pixel-aligned behind it — a seamless loop with
 * no JS and no measurement.
 */
function Marquee({ items, direction = 'left', duration = 45, tilt = 0 }) {
  const sequence = [...items, ...items];

  return (
    <div className={styles.row} style={{ transform: `rotate(${tilt}deg)` }} aria-hidden="true">
      <div
        className={`${styles.track} ${direction === 'right' ? styles.reverse : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {sequence.map((item, i) => (
          <span className={styles.chip} key={`${item.name}-${i}`}>
            <i className={item.icon} aria-hidden="true" />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

Marquee.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, icon: PropTypes.string })
  ).isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
  duration: PropTypes.number,
  tilt: PropTypes.number,
};

export default memo(Marquee);