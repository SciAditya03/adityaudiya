import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import TimelineItem from '../common/TimelineItem';
import { STARTUP_EXPERIENCE } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';

function Startup() {
  return (
    <section id="startup" style={{ background: 'var(--sec-2)' }}>
      <SectionLabel number="05">STARTUP EXPERIENCE</SectionLabel>
      <Reveal as="h2" className={text.title}>
        FOUNDED<span className={text.accent}>/</span>LED
      </Reveal>

      <Reveal stagger>
        {STARTUP_EXPERIENCE.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            date={entry.date}
            location={entry.location}
            company={entry.company}
            role={entry.role}
            bullets={entry.bullets}
            firstItem={index === 0}
          />
        ))}
      </Reveal>
    </section>
  );
}

export default Startup;
