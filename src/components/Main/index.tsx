import Link from 'next/link';

import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {children}

        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </div>
    </main>
  );
};
