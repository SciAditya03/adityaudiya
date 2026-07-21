import SectionLabel from '../common/SectionLabel';
import Reveal from '../common/Reveal';
import { FooterBottom } from '../layout/Footer';
import { SITE } from '../../utils/constants';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact} style={{ background: 'var(--walnut)' }}>
      <SectionLabel number="10" center>
        LET&apos;S CONNECT
      </SectionLabel>

      <Reveal as="h2" className={styles.title}>
        LET&apos;S
        <br />
        BUILD.
      </Reveal>

      <Reveal
        as="a"
        href={`mailto:${SITE.email}`}
        className={styles.email}
        data-cursor="SEND"
      >
        {SITE.email}
      </Reveal>

      <Reveal className={styles.socials}>
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="VIEW">
          LinkedIn
        </a>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" data-cursor="VIEW">
          GitHub
        </a>
        <a href={SITE.phoneHref} data-cursor="CALL">
          {SITE.phone}
        </a>
      </Reveal>

      <FooterBottom />
    </section>
  );
}

export default Contact;
