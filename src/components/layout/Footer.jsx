import { SITE } from '../../utils/constants';
import styles from './Footer.module.css';

/**
 * Two pieces of chrome that live outside the section flow:
 * - a fixed, rotated sidebar label visible while scrolling (desktop only)
 * - the closing copyright / location bar, rendered at the bottom of the page
 */
export function FooterSidebar() {
  return (
    <div className={styles.sidebar} aria-hidden="true">
      {SITE.name.toUpperCase()} / PORTFOLIO {SITE.year}
    </div>
  );
}

export function FooterBottom() {
  return (
    <div className={styles.bottom}>
      <div>© {SITE.year} {SITE.name}. All rights reserved.</div>
      <div>{SITE.location}</div>
    </div>
  );
}
