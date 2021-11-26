import { PostCard } from '@/components/PostCard';
import { PagePropsType } from '@/types/posts';
import utilStyles from '@/styles/utils.module.scss';
import styles from './styles.module.scss';

export const PostsList = ({ postsData }: PagePropsType) => (
  <ul className={`${utilStyles.list} ${styles.list}`}>
    {postsData.map(({ id, date, title, cover }) => (
      <PostCard key={id} id={id} date={date} title={title} cover={cover} />
    ))}
  </ul>
);
