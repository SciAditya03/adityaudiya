import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

/**
 * Full-screen preloader shown until the window has finished loading (plus a
 * short grace period so the fade-out doesn't feel abrupt on fast connections).
 */
function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let timeoutId;
    const reveal = () => {
      timeoutId = setTimeout(() => setHidden(true), 500);
    };

    if (document.readyState === 'complete') {
      reveal();
    } else {
      window.addEventListener('load', reveal);
    }

    return () => {
      window.removeEventListener('load', reveal);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`${styles.preloader} ${hidden ? styles.hidden : ''}`} aria-hidden={hidden}>
      <div className={styles.ball} />
    </div>
  );
}

export default Preloader;
