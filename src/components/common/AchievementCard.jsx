import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AchievementCard.module.css';

function AchievementCard({ num, title, description, meta, linkedin, image }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.cardContainer}>
      {/* Main Flip Card */}
      <div
        className={`${styles.card} ${flipped ? styles.flipped : ''}`}
        role="button"
        tabIndex={0}
        onClick={() => setFlipped(!flipped)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setFlipped(!flipped);
          }
        }}
        aria-label={`${title} - Click to view certificate`}
      >
        {/* Front Side */}
        <div className={styles.cardFront}>
          <div className={styles.cardContent}>
            <div className={styles.num}>{num}</div>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.description}>{description}</p>
            {meta && <div className={styles.meta}>{meta}</div>}
          </div>
          <div className={styles.cardLabel}>
            <span className={styles.labelText}>ACHIEVEMENT</span>
          </div>
        </div>

        {/* Back Side */}
        <div className={styles.cardBack}>
          {image ? (
            <div className={styles.imageContainer}>
              <img
                src={image}
                alt={`Certificate - ${title}`}
                className={styles.certificateImage}
              />
            </div>
          ) : (
            <div className={styles.noImage}>
              <span>Proof of Achievement</span>
            </div>
          )}
          <div className={styles.cardLabel}>
            <span className={styles.labelText}>CERTIFICATE</span>
          </div>
        </div>
      </div>

      {/* Footer - Always Visible, Doesn't Flip */}
      {linkedin && (
        <div className={styles.cardFooter}>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            data-cursor="VIEW"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            <span>View on LinkedIn</span>
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      )}
    </div>
  );
}

AchievementCard.propTypes = {
  num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.node,
  linkedin: PropTypes.string,
  image: PropTypes.string,
};

export default AchievementCard;