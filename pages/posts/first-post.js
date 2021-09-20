import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '../../components';

const FirstPost = () => (
  <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1>First Post</h1>

    <Image src="/images/vertigo.jpg" width={300} height={400} />

    <h2>
      <Link href="/">
        <a href="/">Back to home</a>
      </Link>
    </h2>
  </Layout>
);

export default FirstPost;
