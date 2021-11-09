import { PostCard } from '@/components/PostCard';
import { PagePropsType } from '@/types/posts';
import utilStyles from '@/styles/utils.module.scss';

export const PostsList = ({ postsData }: PagePropsType) => (
  <ul className={utilStyles.list}>
    {postsData.map(({ id, date, title }) => (
      <PostCard key={id} id={id} date={date} title={title} />
    ))}
  </ul>
);
