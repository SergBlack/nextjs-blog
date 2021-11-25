import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import { Layout } from '@/components/Layout';
import { Date } from '@/components/Date';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { PostType } from '@/types/posts';
import utilStyles from '@/styles/utils.module.scss';

import styles from '../styles.module.scss';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;
  const postData = await getPostData(id || '');

  return {
    props: {
      postData,
    },
  };
};

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

type Props = {
  postData: PostType;
};

export default function Post({ postData }: Props) {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      el.classList.add('language-javascript');
      Prism.highlightElement(el);
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div className={styles.contentBlock} dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
      </article>
    </Layout>
  );
}
