import Link from 'next/link';

import { Date } from '@/components/Date';
import utilStyles from '@/styles/utils.module.css';
import { PagePropsType } from '@/types/posts';
import styles from './styles.module.scss';

export const PostsList = ({ postsData }: PagePropsType) => (
  <ul className={utilStyles.list}>
    {postsData.map(({ id, date, title }) => (
      <li className={utilStyles.listItem} key={id}>
        <Link href={`/posts/${id}`}>
          <a>{title}</a>
        </Link>

        <div className={styles.date}>
          <Date dateString={date} />
        </div>
      </li>
    ))}
  </ul>
);
