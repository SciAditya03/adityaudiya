import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import MediaFrame from '../common/MediaFrame';
import AchievementCard from '../common/AchievementCard';
import { HACKATHON_PHOTOS, HACKATHON_TIERS } from '../../utils/constants';
import text from '../../styles/sectionText.module.css';
import strip from '../../styles/photoStrip.module.css';
import styles from './Hackathons.module.css';

function Hackathons() {
  return (
    <section id="hackathons" style={{ background: 'var(--sec-3)' }}>
      <SectionLabel number="06">HACKATHONS, COMPETITIONS &amp; AWARDS</SectionLabel>
      <Reveal as="h2" className={text.title}>
        COMPETED<span className={text.accent}>/</span>WON
      </Reveal>
      <Reveal as="p" className={text.body}>
        24+ competitions. 6× wins. <em>90%+ advancement rate</em>. Each one a lesson in shipping under pressure.
      </Reveal>

      <Reveal stagger className={strip.strip}>
        {HACKATHON_PHOTOS.map((photo) => (
          <MediaFrame
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            caption={photo.caption}
            className={strip.frame}
          />
        ))}
      </Reveal>

      {HACKATHON_TIERS.map((tier) => (
        <Reveal className={styles.tier} key={tier.title}>
          <h4 className={styles.tierTitle}>{tier.title}</h4>
          <div className={styles.grid}>
            {tier.achievements.map((achievement) => (
              <AchievementCard
                key={achievement.num}
                num={achievement.num}
                title={achievement.title}
                description={achievement.description}
                meta={achievement.meta}
                linkedin={achievement.linkedin}
                image={achievement.image}
              />
            ))}
          </div>
        </Reveal>
      ))}
    </section>
  );
}

export default Hackathons;