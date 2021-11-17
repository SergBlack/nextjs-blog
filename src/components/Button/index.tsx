import Link from 'next/link';

import styles from './styles.module.scss';

export const Button = ({ text }: { text: string }) => (
  <div className={styles.backToHome}>
    <Link href="/">
      <a>{text}</a>
    </Link>
  </div>
);
