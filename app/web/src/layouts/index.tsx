import Header from '@/components/Header';
import { IRouteComponentProps } from 'umi';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
