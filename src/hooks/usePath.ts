import { useRouter } from 'next/router';

export const usePath = (path: string) => {
  const { pathname } = useRouter();

  return pathname === path;
};
