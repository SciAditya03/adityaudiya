import { memo } from 'react';
import PropTypes from 'prop-types';
import { scrollToTarget } from '../../utils/helpers';
import styles from './Tag.module.css';

/**
 * Floating pill button used throughout the hero's tag cloud.
 * Clicking scrolls smoothly to `target` (a hash like "#work").
 * Wrapped in React.memo since the hero renders ~20 of these and none of
 * their props change after mount.
 */
function Tag({ label, target, muted = false, style, tabIndex }) {
  return (
    <button
      type="button"
      className={`${styles.tag} ${muted ? styles.muted : ''}`}
      data-cursor="VIEW"
      tabIndex={tabIndex}
      onClick={() => scrollToTarget(target)}
      style={style}
    >
      {label}
    </button>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
  muted: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  tabIndex: PropTypes.number,
};

export default memo(Tag);
