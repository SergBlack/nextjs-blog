import Link from 'next/link';
import Image from 'next/image';

import { Date } from '@/components/Date';
import utilStyles from '@/styles/utils.module.scss';
import WebDev from '../../../public/images/webdev.png';
import styles from './styles.module.scss';

type Props = {
  id: string;
  date: string;
  title: string;
};

export const PostCard = ({ id, date, title }: Props) => (
  <Link href={`/posts/${id}`}>
    <li className={`${utilStyles.borderCircle} ${styles.postCard}`}>
      <a className={styles.link}>
        <div className={styles.imgWrapper}>
          <Image priority src={WebDev} className={styles.img} alt="post-theme" />
        </div>

        <div className={styles.textWrapper}>
          <p>{title}</p>

          <div className={styles.date}>
            <Date dateString={date} />
          </div>
        </div>
      </a>
    </li>
  </Link>
);
