import PropTypes from 'prop-types';
import Reveal from './Reveal';
import styles from '../../styles/sectionText.module.css';

/**
 * The small numbered eyebrow above every section title, e.g. "01 / EDUCATION".
 * Order carries real meaning here: it mirrors the resume's actual chronology
 * of sections, so the numbering is preserved from the original design.
 */
function SectionLabel({ number, children, center = false }) {
  return (
    <Reveal className={styles.label} style={center ? { justifyContent: 'center' } : undefined}>
      {number} / {children}
    </Reveal>
  );
}

SectionLabel.propTypes = {
  number: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
};

export default SectionLabel;
