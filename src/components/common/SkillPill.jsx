import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './SkillPill.module.css';

/**
 * A single skill/tool pill with an icon (Devicon or Font Awesome class).
 * `concept` renders the dashed, subdued style used for non-tool concepts
 * like "Machine Learning" or "RAG".
 */
function SkillPill({ name, icon, concept = false }) {
  return (
    <span className={`${styles.pill} ${concept ? styles.concept : ''}`}>
      <i className={icon} aria-hidden="true" />
      {name}
    </span>
  );
}

SkillPill.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  concept: PropTypes.bool,
};

export default memo(SkillPill);
