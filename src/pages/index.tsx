import Head from 'next/head';
import Link from 'next/link';

import { Date } from '@/components/Date';
import { Layout, siteTitle } from '@/components/Layout';
import { getSortedPostsData } from '@/lib/posts';
import { PagePropsType } from '@/types/posts';
import utilStyles from '@/styles/utils.module.css';

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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br />

              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}