import Image from 'next/image';
import Link from 'next/link';

import utilStyles from '@/styles/utils.module.scss';
import styles from './styles.module.scss';

type Props = {
  src: StaticImageData;
  alt: string;
  height?: number;
  width?: number;
};

export const Avatar = ({ src, alt, height = 64, width = 64 }: Props) => (
  <Link href="/">
    <a className={styles.logo}>
      <Image priority src={src} className={utilStyles.circle} height={height} width={width} alt={alt} />
    </a>
  </Link>
);
