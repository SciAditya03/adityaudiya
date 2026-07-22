import PropTypes from 'prop-types';
import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import { SKILL_GROUPS } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';
import styles from './Skills.module.css';

// Icons are imported by name so the bundler tree-shakes them. Importing the
// `react-icons/fa` or `react-icons/si` barrel instead pulls in every icon in
// the set (~6 MB of JS), so keep these as individual named imports.
import {
  FaAtom,
  FaBalanceScale,
  FaBrain,
  FaChartArea,
  FaCheckCircle,
  FaCode,
  FaComments,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaDribbble,
  FaEye,
  FaFigma,
  FaFire,
  FaFlask,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLink,
  FaNetworkWired,
  FaNodeJs,
  FaPlayCircle,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaRedo,
  FaRobot,
  FaSearch,
  FaSquareRootAlt,
  FaTerminal,
} from 'react-icons/fa';
import { SiC, SiCplusplus } from 'react-icons/si';

const FALLBACK_ICON = { icon: FaCode, color: '#666' };

// Icon mapping for skills using react-icons
const ICON_MAP = {
  // Languages
  'Python': { icon: FaPython, color: '#3776AB' },
  'JavaScript': { icon: FaJs, color: '#F7DF1E' },
  'Java': { icon: FaJava, color: '#007396' },
  'C': { icon: SiC, color: '#00599C' },
  'TypeScript': { icon: FaJs, color: '#3178C6' },
  'C++': { icon: SiCplusplus, color: '#00599C' },

  // AI/ML
  'Machine Learning': { icon: FaBrain, color: '#FF6B6B' },
  'Deep Learning': { icon: FaNetworkWired, color: '#4ECDC4' },
  'Generative AI': { icon: FaRobot, color: '#95E1D3' },
  'LLMs': { icon: FaDatabase, color: '#F38181' },
  'RAG': { icon: FaSearch, color: '#AA96DA' },
  'Prompt Engineering': { icon: FaTerminal, color: '#FCBAD3' },
  'AI Agents': { icon: FaRobot, color: '#A8D8EA' },
  'NLP': { icon: FaComments, color: '#FFD93D' },
  'Transformer Architectures': { icon: FaProjectDiagram, color: '#6BCB77' },
  'Model Alignment': { icon: FaBalanceScale, color: '#FF6B9D' },
  'Continual Learning': { icon: FaRedo, color: '#C7CEEA' },
  'Molecular AI': { icon: FaAtom, color: '#FFB6B9' },

  // Frameworks & Tools
  'PyTorch': { icon: FaFire, color: '#EE4C2C' },
  'React.js': { icon: FaReact, color: '#61DAFB' },
  'Docker': { icon: FaDocker, color: '#2496ED' },
  'Git': { icon: FaGitAlt, color: '#F05032' },
  'MATLAB': { icon: FaSquareRootAlt, color: '#0076A8' },
  'Flask': { icon: FaFlask, color: '#000000' },
  'ChemBERTa': { icon: FaFlask, color: '#FF6B6B' },
  'RDKit': { icon: FaFlask, color: '#393E46' },
  'Simulink': { icon: FaLink, color: '#0076A8' },
  'Altair': { icon: FaChartArea, color: '#1F77B4' },
  'Playwright': { icon: FaPlayCircle, color: '#2EAD33' },
  'N8N': { icon: FaNetworkWired, color: '#EA4B71' },
  'Automation Testing': { icon: FaCheckCircle, color: '#4CAF50' },
  'HTML': { icon: FaHtml5, color: '#E34F26' },
  'CSS': { icon: FaCss3Alt, color: '#1572B6' },
  'Node.js': { icon: FaNodeJs, color: '#339933' },
  'GitHub': { icon: FaGithub, color: '#181717' },
  'Supabase': { icon: FaDatabase, color: '#3ECF8E' },
  'Figma': { icon: FaFigma, color: '#F24E1E' },
  'Framer': { icon: FaFigma, color: '#0055FF' },
  'Dribbble': { icon: FaDribbble, color: '#EA4C89' },
  'Sentry': { icon: FaEye, color: '#362D59' },
};

function SkillIcon({ skillName }) {
  const { icon: IconComponent, color } = ICON_MAP[skillName] || FALLBACK_ICON;

  return (
    <span className={styles.icon} style={{ color }}>
      <IconComponent />
    </span>
  );
}

SkillIcon.propTypes = {
  skillName: PropTypes.string.isRequired,
};

function SkillStrip({ group, config }) {
  // Duplicate items to create a mathematically seamless infinite loop
  const items = [...group.skills, ...group.skills];

  return (
    <div className={styles.stripOuter} style={{ '--strip-rotate': `${config.rotate}deg` }}>
      <div 
        className={styles.stripTrack} 
        style={{ 
          '--duration': `${config.duration}s`, 
          '--direction': config.direction === 'right' ? 'reverse' : 'normal' 
        }}
      >
        {items.map((skill, i) => (
          <div className={styles.skillItem} key={`${skill.name}-${i}`}>
            <SkillIcon skillName={skill.name} />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

SkillStrip.propTypes = {
  group: PropTypes.shape({
    title: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  }).isRequired,
  config: PropTypes.shape({
    duration: PropTypes.number,
    direction: PropTypes.string,
    rotate: PropTypes.number,
  }).isRequired,
};

function Skills() {
  return (
    <section className={styles.section}>
      <SectionLabel number="02">TECHNICAL SKILLS</SectionLabel>
      <Reveal as="h2" className={text.title}>
        ARSENAL<span className={text.accent}>/</span>TOOLS
      </Reveal>

      <div className={styles.groups}>
        {SKILL_GROUPS.map((group, i) => (
          <div key={group.title} className={styles.group}>
            <h4 className={styles.groupTitle}>{group.title}</h4>
            <SkillStrip
              group={group}
              config={{
                // Slow, varying speeds (60s, 75s, 90s) for a premium, staggered parallax feel
                duration: 60 + i * 15, 
                direction: i % 2 === 0 ? 'left' : 'right',
                rotate: -1.5 + i * 0.3,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;