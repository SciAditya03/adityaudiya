import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MediaFrame.module.css';

/**
 * Image frame with a diagonal-stripe placeholder pattern that shows through
 * whenever the image is missing/broken (mirrors the original site's
 * onerror="this.style.display='none'" fallback, but done the React way via
 * state instead of direct DOM mutation).
 */
function MediaFrame({ src, alt = '', caption, circle = false, className = '' }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className={`${styles.frame} ${circle ? styles.circle : ''} ${className}`}>
      {!broken && (
        <img src={src} alt={alt} loading="lazy" onError={() => setBroken(true)} />
      )}
      {caption && (
        <div className={`${styles.caption} ${circle ? styles.captionCenter : ''}`}>
          {caption}
        </div>
      )}
    </div>
  );
}

MediaFrame.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  circle: PropTypes.bool,
  className: PropTypes.string,
};

export default MediaFrame;
