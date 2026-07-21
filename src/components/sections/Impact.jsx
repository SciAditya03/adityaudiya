import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import MediaFrame from '../common/MediaFrame';
import { IMPACT_PHOTOS, IMPACT_CARDS } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';
import strip from '../../styles/photoStrip.module.css';
import styles from './Impact.module.css';

function Impact() {
  return (
    <section id="impact" style={{ background: 'var(--sec-2)' }}>
      <SectionLabel number="09">COMMUNITY IMPACT, FIELD RESEARCH &amp; INDUSTRY ENGAGEMENT</SectionLabel>
      <Reveal as="h2" className={text.title}>
        BEYOND<span className={text.accent}>/</span>CODE
      </Reveal>
      <Reveal as="p" className={text.body}>
        Field research at Narayani Hospital. Executive training for Government of India officers. Workshops that
        shaped my product thinking.
      </Reveal>

      <Reveal stagger className={strip.strip} style={{ marginTop: '48px' }}>
        {IMPACT_PHOTOS.map((photo) => (
          <MediaFrame
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            caption={photo.caption}
            className={strip.frame}
          />
        ))}
      </Reveal>

      <Reveal stagger className={styles.grid}>
        {IMPACT_CARDS.map((card, index) => (
          <div className={styles.card} key={card.title}>
            <div className={styles.cardContent}>
              <div className={styles.num}>{String(index + 1).padStart(2, '0')}</div>
              <div className={styles.label}>{card.label}</div>
              <h5 className={styles.title}>{card.title}</h5>
              <p className={styles.description}>{card.description}</p>
              <div className={styles.outcome}>
                <strong>{card.outcomeLabel}</strong> {card.outcome}
              </div>
            </div>
            <div className={styles.cardLabel}>
              <span className={styles.labelText}>IMPACT</span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Impact;