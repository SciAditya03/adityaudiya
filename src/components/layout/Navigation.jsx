import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NAV_LINKS, SITE } from '../../utils/constants';
import { scrollToTarget } from '../../utils/helpers';
import styles from './Navigation.module.css';

export const NAV_SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''));

function Navigation({ activeId }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href) => (e) => {
    e.preventDefault();
    scrollToTarget(href);
    setMobileOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a
        href="#top"
        className={styles.logo}
        onClick={(e) => {
          e.preventDefault();
          scrollToTarget('#top');
        }}
      >
        {SITE.name.toUpperCase()}
      </a>

      <ul className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              data-cursor="VIEW"
              className={
                activeId === link.href.replace('#', '') ? styles.active : ''
              }
              onClick={handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={styles.menuBtn}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  activeId: PropTypes.string,
};

export default Navigation;