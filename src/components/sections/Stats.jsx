import Reveal from '../common/Reveal';
import StatCard from '../common/StatCard';
import { STATS } from '../../utils/constants';
import styles from './Stats.module.css';

/**
 * The band of headline numbers between Projects and Experience.
 * The first three animate up from zero on scroll; the rest are small
 * enough that a counter would be noise rather than emphasis.
 */
function Stats() {
  return (
    <section style={{ background: 'var(--walnut)', padding: '70px 48px' }}>
      <Reveal stagger className={styles.row}>
        {STATS.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            counter={stat.counter}
          />
        ))}
      </Reveal>
    </section>
  );
}

export default Stats;
