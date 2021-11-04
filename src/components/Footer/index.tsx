import { SocialButtons } from '@/components/SocialButtons';
import { MY_NAME } from '@/constants/constants';
import styles from './styles.module.scss';

export const Footer = () => {
  const copyright = `© ${new Date().getFullYear()} `;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.description}>
          <p>Блог frontend разработчика</p>
        </div>

        <SocialButtons />

        <div className={styles.copyright}>
          {copyright}
          <a href="">{MY_NAME}</a>
        </div>
      </div>
    </footer>
  );
};
