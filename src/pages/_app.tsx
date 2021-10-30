import { PagePropsType, PostType } from '@/types/posts';
import '@/styles/global.css';

type Props = {
  // TODO: типизировать
  Component: any;
  pageProps: PagePropsType;
};

const App = ({ Component, pageProps }: Props) => <Component {...pageProps} />;

export default App;
