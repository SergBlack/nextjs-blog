import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Footer } from '@/components/Footer';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
