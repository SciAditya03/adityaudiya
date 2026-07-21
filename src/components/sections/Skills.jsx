import { useEffect, useState } from 'react';
import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import { SKILL_GROUPS } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';
import styles from './Skills.module.css';
import { SiC, SiCplusplus } from 'react-icons/si';

// Icon mapping for skills using react-icons
const ICON_MAP = {
  // Languages
  'Python': { lib: 'FaPython', color: '#3776AB' },
  'JavaScript': { lib: 'FaJs', color: '#F7DF1E' },
  'Java': { lib: 'FaJava', color: '#007396' },
  'C': { lib: 'SiC', color: '#00599C', fromSI: true },
  'TypeScript': { lib: 'FaJs', color: '#3178C6' },
  'C++': { lib: 'SiCplusplus', color: '#00599C', fromSI: true },
  
  // AI/ML
  'Machine Learning': { lib: 'FaBrain', color: '#FF6B6B' },
  'Deep Learning': { lib: 'FaNetworkWired', color: '#4ECDC4' },
  'Generative AI': { lib: 'FaRobot', color: '#95E1D3' },
  'LLMs': { lib: 'FaDatabase', color: '#F38181' },
  'RAG': { lib: 'FaSearch', color: '#AA96DA' },
  'Prompt Engineering': { lib: 'FaTerminal', color: '#FCBAD3' },
  'AI Agents': { lib: 'FaRobot', color: '#A8D8EA' },
  'NLP': { lib: 'FaComments', color: '#FFD93D' },
  'Transformer Architectures': { lib: 'FaProjectDiagram', color: '#6BCB77' },
  'Model Alignment': { lib: 'FaBalanceScale', color: '#FF6B9D' },
  'Continual Learning': { lib: 'FaRedo', color: '#C7CEEA' },
  'Molecular AI': { lib: 'FaAtom', color: '#FFB6B9' },
  
  // Frameworks & Tools
  'PyTorch': { lib: 'FaFire', color: '#EE4C2C' },
  'React.js': { lib: 'FaReact', color: '#61DAFB' },
  'Docker': { lib: 'FaDocker', color: '#2496ED' },
  'Git': { lib: 'FaGitAlt', color: '#F05032' },
  'MATLAB': { lib: 'FaSquareRootAlt', color: '#0076A8' },
  'Flask': { lib: 'FaFlask', color: '#000000' },
  'ChemBERTa': { lib: 'FaFlask', color: '#FF6B6B' },
  'RDKit': { lib: 'FaFlask', color: '#393E46' },
  'Simulink': { lib: 'FaLink', color: '#0076A8' },
  'Altair': { lib: 'FaChartArea', color: '#1F77B4' },
  'Playwright': { lib: 'FaPlayCircle', color: '#2EAD33' },
  'N8N': { lib: 'FaNetworkWired', color: '#EA4B71' },
  'Automation Testing': { lib: 'FaCheckCircle', color: '#4CAF50' },
  'HTML': { lib: 'FaHtml5', color: '#E34F26' },
  'CSS': { lib: 'FaCss3Alt', color: '#1572B6' },
  'Node.js': { lib: 'FaNodeJs', color: '#339933' },
  'GitHub': { lib: 'FaGithub', color: '#181717' },
  'Supabase': { lib: 'FaDatabase', color: '#3ECF8E' },
  'Figma': { lib: 'FaFigma', color: '#F24E1E' },
  'Framer': { lib: 'FaFigma', color: '#0055FF' },
  'Dribbble': { lib: 'FaDribbble', color: '#EA4C89' },
  'Sentry': { lib: 'FaEye', color: '#362D59' },
};

// Dynamic icon renderer
function SkillIcon({ skillName }) {
  const [IconComponent, setIconComponent] = useState(null);
  const iconConfig = ICON_MAP[skillName] || { lib: 'FaCode', color: '#666' };

  useEffect(() => {
    const loadIcon = async () => {
      try {
        let Icon;
        if (iconConfig.fromSI) {
          // Load from Simple Icons
          const { [iconConfig.lib]: LoadedIcon } = await import('react-icons/si');
          Icon = LoadedIcon;
        } else {
          // Load from Font Awesome
          const { [iconConfig.lib]: LoadedIcon } = await import('react-icons/fa');
          Icon = LoadedIcon;
        }
        setIconComponent(() => Icon);
      } catch (error) {
        console.error(`Failed to load icon ${iconConfig.lib}:`, error);
      }
    };
    loadIcon();
  }, [iconConfig.lib, iconConfig.fromSI]);

  if (!IconComponent) {
    return <span className={styles.iconPlaceholder} />;
  }

  return (
    <span className={styles.icon} style={{ color: iconConfig.color }}>
      <IconComponent />
    </span>
  );
}

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