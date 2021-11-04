import Link from 'next/link';

import { PATHS } from '@/constants/constants';
import { usePath } from '../../hooks/usePath';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  const isHome = usePath(PATHS.HOME);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {children}

        {!isHome && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};
