import Link from 'next/link';
import Head from 'next/head';

import { Avatar } from '@/components/Avatar';
import { MY_NAME, siteTitle } from '@/constants/constants';
import MyAvatar from '../../../public/images/avatar.png';
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
        <Avatar src={MyAvatar} alt={MY_NAME} />

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
