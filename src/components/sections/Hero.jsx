import { memo } from 'react';
import PropTypes from 'prop-types';
import Tag from '../common/Tag';
import MediaFrame from '../common/MediaFrame';
import { HERO_TAG_ROWS, HERO_MARQUEE_ROWS, HERO_CONTENT, SITE } from '../../utils/constants';
import { scrollToTarget } from '../../utils/helpers';
import styles from './Hero.module.css';

/**
 * One infinitely-scrolling row of identity tags.
 *
 * The track renders its tags twice and translates by exactly -50%, so the
 * second copy lands precisely where the first began — the loop has no seam
 * and no JS is involved. Animation runs on `transform` only, so it stays on
 * the compositor and never triggers layout.
 *
 * The duplicate set is `aria-hidden` and its tags are removed from the tab
 * order, so screen readers and keyboard users encounter each tag once.
 */
const MarqueeRow = memo(function MarqueeRow({ tags, direction, duration }) {
  const renderSet = (isClone) =>
    tags.map((tag) => (
      <Tag
        key={`${isClone ? 'clone' : 'orig'}-${tag.label}`}
        label={tag.label}
        target={tag.target}
        muted={tag.muted}
        tabIndex={isClone ? -1 : undefined}
      />
    ));

  return (
    <div className={styles.row}>
      <div
        className={`${styles.track} ${direction === 'right' ? styles.reverse : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className={styles.set}>{renderSet(false)}</div>
        <div className={styles.set} aria-hidden="true">
          {renderSet(true)}
        </div>
      </div>
    </div>
  );
});

MarqueeRow.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      target: PropTypes.string,
      muted: PropTypes.bool,
    })
  ).isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  duration: PropTypes.number.isRequired,
};

function Hero() {
  const { name, topLabel, photo, tagline, stats, ctas, scrollHint } = HERO_CONTENT;

  return (
    <section className={styles.hero} id="top">
      {/* Top label sits above the marquee band in the DOM */}
      <div className={styles.topLabel}>{topLabel}</div>

      {/* Marquee sits behind the content as an ambient layer */}
      <div className={styles.marquee} aria-hidden="true">
        {HERO_TAG_ROWS.map((tags, i) => {
          const motion = HERO_MARQUEE_ROWS[i] ?? HERO_MARQUEE_ROWS[0];
          return (
            <MarqueeRow
              key={motion.direction + motion.duration + i}
              tags={tags}
              direction={motion.direction}
              duration={motion.duration}
            />
          );
        })}
      </div>

      <div className={styles.content}>
        <MediaFrame
          src={photo.src}
          alt={photo.alt}
          caption={photo.caption}
          circle
          className={styles.profilePhoto}
        />

        <h1 className={styles.name}>{name}</h1>
        <p className={styles.tagline}>{tagline.lead}</p>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          {ctas.map((cta) => (
            <button
              type="button"
              key={cta.label}
              className={`${styles.cta} ${cta.primary ? styles.ctaPrimary : ''}`}
              data-cursor="VIEW"
              onClick={() => scrollToTarget(cta.target)}
            >
              {cta.label}
            </button>
          ))}

          <div className={styles.socials}>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="VIEW" aria-label="LinkedIn profile" className={styles.social}>
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            </a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" data-cursor="VIEW" aria-label="GitHub profile" className={styles.social}>
              <i className="fa-brands fa-github" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </br>
      <div className={styles.scrollHint}>{scrollHint}</div>
    </section>
  );
}

export default Hero;
