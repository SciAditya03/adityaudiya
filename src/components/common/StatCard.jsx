import PropTypes from 'prop-types';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './StatCard.module.css';

/**
 * A single number+label stat. When `counter` is true the number animates up
 * from 0 as it scrolls into view (useCountUp); otherwise it renders as a
 * static value (matches the original markup, where only the first three
 * stats used the JS counter and the rest were plain numbers).
 */
function StatCard({ label, value, suffix, counter = false }) {
  const [ref, animatedValue] = useCountUp(value);
  const display = counter ? animatedValue : value;

  return (
    <div className={styles.block}>
      <div className={styles.number} ref={counter ? ref : undefined}>
        {display}
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  counter: PropTypes.bool,
};

export default StatCard;
