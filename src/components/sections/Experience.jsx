import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import TimelineItem from '../common/TimelineItem';
import { EXPERIENCE } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';
import styles from './Experience.module.css';

// Fading layer colors - each experience gets progressively deeper
const LAYER_COLORS = [
  '#F8F5EE', // Lightest - first experience
  '#EFE9DA', // Second layer
  '#E3D9C3', // Third layer
  '#D4C8AD', // Fourth layer (darkest of the fade)
];

function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--sec-4)' }}>
      <SectionLabel number="04">PROFESSIONAL &amp; RESEARCH EXPERIENCE</SectionLabel>
      <Reveal as="h2" className={text.title}>
        WHERE I&apos;VE<span className={text.accent}>/</span>BUILT
      </Reveal>
      <Reveal as="p" className={text.body}>
        From <em>Government of Himachal Pradesh</em> deployments to <em>IIT (BHU) research labs</em> - each role
        sharpened a different edge of my craft.
      </Reveal>

      <Reveal stagger className={styles.timelineContainer}>
        {EXPERIENCE.map((job, index) => (
          <TimelineItem
            key={job.id}
            date={job.date}
            location={job.location}
            company={job.company}
            role={job.role}
            bullets={job.bullets}
            layerColor={LAYER_COLORS[index % LAYER_COLORS.length]}
            layerIndex={index}
          />
        ))}
      </Reveal>
    </section>
  );
}

export default Experience;