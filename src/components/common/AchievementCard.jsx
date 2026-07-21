import styles from './AchievementCard.module.css';

function AchievementCard({ num, title, description, meta, linkedin, image }) {
  return (
    <div
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-label={`${title} - Hover to view certificate`}
    >
      {/* Front Side */}
      <div className={styles.cardFront}>
        <div className={styles.cardContent}>
          <div className={styles.num}>{num}</div>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.description}>{description}</p>
          {meta && <div className={styles.meta}>{meta}</div>}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
              onClick={(e) => e.stopPropagation()}
            >
              View on LinkedIn →
            </a>
          )}
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
  );
}

export default AchievementCard;