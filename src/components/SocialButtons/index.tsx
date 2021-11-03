import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faVk, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.scss';

export const SocialButtons = () => {
  return (
    <div className={styles.social}>
      <Link href="https://github.com/SergBlack">
        <a className={styles.github}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/sergey-osipchuk">
        <a className={styles.linkedin}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.telegram}>
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
      </Link>
      <Link href="https://vk.com/id2329393">
        <a className={styles.vk}>
          <FontAwesomeIcon icon={faVk} size="2x" />
        </a>
      </Link>
    </div>
  );
};
