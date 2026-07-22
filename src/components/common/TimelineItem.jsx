import PropTypes from 'prop-types';
import styles from './TimelineItem.module.css';

function TimelineItem({ date, location, company, role, bullets = [], layerColor, layerIndex }) {
  return (
    <div
      className={styles.item}
      style={{ '--layer-color': layerColor }}
      data-layer={layerIndex}
    >
      <div className={styles.timeline}>
        <div className={styles.dot} />
        <div className={styles.line} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>{date}</span>
            <span className={styles.location}>{location}</span>
          </div>
          <div className={styles.companyRole}>
            <h4 className={styles.company}>{company}</h4>
            <p className={styles.role}>{role}</p>
          </div>
        </div>

        <ul className={styles.bullets}>
          {bullets.map((bullet, i) => (
            <li key={i} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

TimelineItem.propTypes = {
  date: PropTypes.string,
  location: PropTypes.string,
  company: PropTypes.string.isRequired,
  role: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.node),
  layerColor: PropTypes.string,
  layerIndex: PropTypes.number,
};

export default TimelineItem;