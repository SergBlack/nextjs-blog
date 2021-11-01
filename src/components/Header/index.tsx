import Link from 'next/link';
import Image from 'next/image';

import { MY_NAME } from '@/constants/constants';
import utilStyles from '@/styles/utils.module.css';
import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>
          <Image priority src="/images/avatar.png" className={utilStyles.circle} height={64} width={64} alt={MY_NAME} />
        </a>
      </Link>

      <div className={styles.textWrapper}>
        <Link href="/">
          <a className={styles.name}>{MY_NAME}</a>
        </Link>

        <p>Frontend developer</p>
      </div>
    </div>
  </header>
);
