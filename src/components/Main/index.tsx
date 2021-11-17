import { useRouter } from 'next/router';

import { Button } from '@/components/Button';
import { PATHS } from '@/constants/constants';
import { usePath } from '../../hooks/usePath';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  const router = useRouter();
  const isHome = usePath(PATHS.HOME);

  const onClick = () => {
    router.push('/');
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {children}

        {!isHome && <Button text="На главную" onClick={onClick} />}
      </div>
    </main>
  );
};
