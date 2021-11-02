import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import styles from './styles.module.scss';
import { Main } from '@/components/Main';

export const siteTitle = 'Next.js Sample Website';

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
