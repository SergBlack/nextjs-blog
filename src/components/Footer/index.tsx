import styles from './styles.module.scss';
import { MY_NAME } from '@/constants/constants';
import { SocialButtons } from '@/components/SocialButtons';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.description}>
        <p>Блог frontend разработчика</p>
      </div>

      <SocialButtons />

      <div className={styles.copyright}>
        {`© ${new Date().getFullYear()} `}
        <a href="">{MY_NAME}</a>
      </div>
    </div>
  </footer>
);
