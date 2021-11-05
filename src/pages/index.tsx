import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { PostsList } from '@/components/PostsList';
import { getSortedPostsData } from '@/lib/posts';
import { PagePropsType } from '@/types/posts';
import { siteTitle } from '@/constants/constants';
import utilStyles from '@/styles/utils.module.css';

import styles from './styles.module.scss';

export async function getStaticProps() {
  const postsData = getSortedPostsData();
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData }: PagePropsType) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.posts}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <PostsList postsData={postsData} />
      </section>
    </Layout>
  );
}
