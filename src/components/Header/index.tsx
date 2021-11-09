import Link from 'next/link';
import Head from 'next/head';

import { Avatar } from '@/components/Avatar';
import { MY_NAME, siteTitle } from '@/constants/constants';
import MyAvatar from '../../../public/images/avatar.png';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';

export const Header = () => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="manifest" href="site.webmanifest" />
      <meta name="description" content="Web development blog" />
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
        <div className={styles.logoWrapper}>
          <Avatar src={MyAvatar} alt={MY_NAME} />

          <div className={styles.textWrapper}>
            <Link href="/">
              <a className={styles.name}>{MY_NAME}</a>
            </Link>

            <p>Frontend developer</p>
          </div>
        </div>

        <div className={styles.techWrapper}>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <a className={styles.js}>
              <FontAwesomeIcon icon={faJs} size="2x" />
            </a>
          </Link>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">
            <a className={styles.css}>
              <FontAwesomeIcon icon={faCss3Alt} size="2x" />
            </a>
          </Link>
          <Link href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
            <a className={styles.html}>
              <FontAwesomeIcon icon={faHtml5} size="2x" />
            </a>
          </Link>
          <Link href="https://reactjs.org/">
            <a className={styles.react}>
              <FontAwesomeIcon icon={faReact} size="2x" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  </>
);
