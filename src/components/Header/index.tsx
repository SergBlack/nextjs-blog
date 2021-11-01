import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { MY_NAME, PATHS } from '@/constants/constants';
import utilStyles from '@/styles/utils.module.css';
import styles from './styles.module.scss';

export const Header = () => {
  const { pathname } = useRouter();
  const isHomePage = pathname === PATHS.ROOT;

  return (
    <header className={styles.header}>
      {isHomePage ? (
        <>
          <Image
            priority
            src="/images/vertigo.jpg"
            className={utilStyles.borderCircle}
            height={64}
            width={64}
            alt={MY_NAME}
          />
          <h1 className={utilStyles.heading2Xl}>{MY_NAME}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/vertigo.jpg"
                className={utilStyles.borderCircle}
                height={64}
                width={64}
                alt={MY_NAME}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{MY_NAME}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
  );
};
