import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import { RESEARCH_QUOTE } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';
import styles from './Research.module.css';

function Research() {
  return (
    <section style={{ background: 'var(--walnut)' }}>
      <SectionLabel number="08">RESEARCH</SectionLabel>
      <Reveal as="h2" className={text.title}>
        PUSHING<span className={text.accent}>/</span>BOUNDARIES
      </Reveal>
      <Reveal as="p" className={text.body}>
        Research at <em>IIT (BHU) VCA Lab</em> - bridging Continual Learning, Molecular AI, and Representation
        Stability. Work submitted to ACM CODS-COMAD 2025.
      </Reveal>

      <Reveal as="blockquote" className={styles.quote}>
        <p>{RESEARCH_QUOTE.quote}</p>
        <cite>{RESEARCH_QUOTE.cite}</cite>
      </Reveal>
    </section>
  );
}

export default Research;
