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
  cover?: string;
};

export const PostCard = ({ id, date, title, cover }: Props) => (
  <Link href={`/posts/${id}`}>
    <li className={`${utilStyles.borderCircle} ${styles.postCard}`}>
      <a className={styles.link}>
        <div className={styles.imgWrapper}>
          <Image
            priority
            src={cover || WebDev}
            width={260}
            height={240}
            layout="responsive"
            className={styles.img}
            alt="post-cover"
          />
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
