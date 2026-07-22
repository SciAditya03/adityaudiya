import PropTypes from 'prop-types';
import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import MediaFrame from '../common/MediaFrame';
import IconLink from '../common/IconLink';
import { PROJECTS } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';
import styles from './Projects.module.css';

function Project({ project, index }) {
  return (
    <Reveal className={styles.projectCard} style={{ '--layer-color': index === 0 ? '#F8F5EE' : '#EFE9DA' }}>
      <div className={styles.cardHeader}>
        <div className={styles.meta}>{project.meta}</div>
        <IconLink
          href={project.repo}
          icon="fa-brands fa-github"
          label={`${project.title} GitHub repository`}
          cursorLabel="REPO"
        />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          
          <div className={styles.techTags}>
            {project.techTags.map((tag) => (
              <span className={styles.techTag} key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.description}>
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.stats}>
            {project.stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <MediaFrame
          src={project.image.src}
          alt={project.image.alt}
          caption={project.image.caption}
          className={styles.imageWrapper}
        />
      </div>

      <div className={styles.cardLabel}>
        <span className={styles.labelText}>PROJECT</span>
      </div>
    </Reveal>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    meta: PropTypes.string,
    title: PropTypes.string,
    repo: PropTypes.string,
    techTags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.object,
    paragraphs: PropTypes.arrayOf(PropTypes.string),
    stats: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

function Projects() {
  return (
    <section id="work" style={{ background: 'var(--sec-3)' }}>
      <SectionLabel number="03">FEATURED LIVE PROJECTS</SectionLabel>
      <Reveal as="h2" className={text.title}>
        BUILT<span className={text.accent}>/</span>SHIPPED
      </Reveal>
      <Reveal as="p" className={text.body}>
        Two flagship systems - one for <em>mission-critical avionics</em>, one for{' '}
        <em>predicting natural disasters</em>. Both delivered ahead of schedule. Both validated by national-level
        recognition.
      </Reveal>

      <div className={styles.grid}>
        {PROJECTS.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;