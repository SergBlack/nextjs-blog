import styles from './styles.module.scss';
import { MY_NAME } from '@/constants/constants';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.description}>
        <p>Блог frontend разработчика</p>
      </div>

      <div className={styles.socialLinks}>SocialLinks</div>

      <div className={styles.copyright}>
        {`© ${new Date().getFullYear()} `}
        <a href="">{MY_NAME}</a>
      </div>
    </div>
  </footer>
);
