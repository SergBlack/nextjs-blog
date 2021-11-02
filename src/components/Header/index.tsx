import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import { siteTitle } from '@/components/Layout';
import { MY_NAME } from '@/constants/constants';
import utilStyles from '@/styles/utils.module.css';
import styles from './styles.module.scss';

export const Header = () => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Learn how to build a personal website using Next.js" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>WebDevBlog</title>
    </Head>

    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              priority
              src="/images/avatar.png"
              className={utilStyles.circle}
              height={64}
              width={64}
              alt={MY_NAME}
            />
          </a>
        </Link>

        <div className={styles.textWrapper}>
          <Link href="/">
            <a className={styles.name}>{MY_NAME}</a>
          </Link>

          <p>Frontend developer</p>
        </div>
      </div>
    </header>
  </>
);
