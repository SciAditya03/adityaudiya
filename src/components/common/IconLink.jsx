import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './IconLink.module.css';

/**
 * Circular icon-only external link (GitHub repo, LinkedIn post, etc.)
 */
function IconLink({ href, icon, label, cursorLabel = 'VIEW', small = false }) {
  return (
    <a
      className={`${styles.iconLink} ${small ? styles.small : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor={cursorLabel}
      aria-label={label}
    >
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  cursorLabel: PropTypes.string,
  small: PropTypes.bool,
};

export default memo(IconLink);
