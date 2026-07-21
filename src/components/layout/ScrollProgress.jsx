import { useScrollProgress } from '../../hooks/useScrollProgress';
import styles from './ScrollProgress.module.css';

/**
 * Thin fixed bar at the very top of the viewport showing how far the
 * visitor has scrolled through the page.
 */
function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className={styles.bar} style={{ width: `${progress}%` }} />;
}

export default ScrollProgress;
