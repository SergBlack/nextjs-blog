import Link from 'next/link';

import { Date } from '@/components/Date';
import utilStyles from '@/styles/utils.module.scss';
import styles from './styles.module.scss';

type Props = {
  id: string;
  date: string;
  title: string;
};

export const PostCard = ({ id, date, title }: Props) => (
  <Link href={`/posts/${id}`}>
    <div className={`${utilStyles.borderCircle} ${styles.postCard}`} onClick={() => console.log('click')}>
      <a className={utilStyles.link}>{title}</a>

      <div className={styles.date}>
        <Date dateString={date} />
      </div>
    </div>
  </Link>
);
