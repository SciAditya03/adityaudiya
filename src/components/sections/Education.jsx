import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import MediaFrame from '../common/MediaFrame';
import { EDUCATION } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';
import styles from './Education.module.css';

function Education() {
  return (
    <section id="education" style={{ background: 'var(--sec-2)' }}>
      <SectionLabel number="01">EDUCATION</SectionLabel>
      <Reveal as="h2" className={text.title}>
        ACADEMICS<span className={text.accent}>/</span>ENGINEERING
      </Reveal>

      <Reveal className={styles.card}>
        <MediaFrame
          src={EDUCATION.logo.src}
          alt={EDUCATION.logo.alt}
          caption={EDUCATION.logo.caption}
          className={styles.logo}
        />
        <div>
          <h3 className={styles.name}>{EDUCATION.institution}</h3>
          <div className={styles.location}>{EDUCATION.location}</div>
          <div className={styles.degree}>
            <strong>{EDUCATION.degree}</strong> - {EDUCATION.specialization}
          </div>
          <span className={styles.year}>{EDUCATION.years}</span>
        </div>
      </Reveal>
    </section>
  );
}

export default Education;
