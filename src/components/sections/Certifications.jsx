import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import MediaFrame from '../common/MediaFrame';
import { CERTIFICATIONS } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';
import styles from './Certifications.module.css';

function Certifications() {
  return (
    <section style={{ background: 'var(--sec-4)' }}>
      <SectionLabel number="07">CERTIFICATIONS</SectionLabel>
      <Reveal as="h2" className={text.title}>
        VERIFIED<span className={text.accent}>/</span>SKILLS
      </Reveal>

      <Reveal stagger className={styles.list}>
        {CERTIFICATIONS.map((cert) => (
          <div className={styles.row} key={cert.id}>
            <MediaFrame src={cert.logo} alt={`${cert.issuer} logo`} className={styles.mark} />
            <div>
              <h5 className={styles.title}>{cert.title}</h5>
              <span className={styles.issuer}>{cert.issuer}</span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Certifications;
