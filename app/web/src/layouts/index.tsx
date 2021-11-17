import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { IRouteComponentProps, Helmet } from 'umi';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <>
      <Helmet>
        <title>Hacker News</title>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
}
