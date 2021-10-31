import styles from './styles.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.description}>Блог</p>

    <div className={styles.copyright}>
      {'Copyright © '}
      <a href="">http://myblog.ru</a>
      {` ${new Date().getFullYear()}`}
    </div>
  </footer>
);
