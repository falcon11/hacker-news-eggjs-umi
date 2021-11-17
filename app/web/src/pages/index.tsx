import { FC } from 'react';
import { IGetInitialProps } from 'umi';
import qs from 'qs';
import fetcher from '@/utils/fetcher';
import * as moment from '@/utils/moment';
import styles from './index.less';

type PageProps = {
  newsList: any[];
};

const IndexPage: FC<PageProps> & { getInitialProps: IGetInitialProps } = ({
  newsList,
}) => {
  return (
    <div className={styles.page}>
      {newsList.map((item, index) => {
        const { by, url, title, score, time, descendants, id } = item;
        return (
          <div key={id}>
            <div>
              <span className={styles.rank}>{index + 1}.</span>
              <a className={styles.titleLink} href={url}>
                {title}
              </a>
              <span className={styles.hostname}>
                {' '}
                ({new URL(url).hostname})
              </span>
            </div>
            <p className={styles.detail}>
              {score} points by {by} {moment.relativeTime(time)} | {descendants}{' '}
              comments
            </p>
          </div>
        );
      })}
    </div>
  );
};

IndexPage.getInitialProps = (async (ctx) => {
  const { isServer, history } = ctx;
  const query = qs.parse(history.location.search, {
    ignoreQueryPrefix: true,
  }) as any;
  if (isServer) {
    const { service } = ctx;
    const newsList = await service.news.getNewsList(query.page);
    return { newsList };
  }
  const newsList = await (
    await fetcher.get('/api/news', { params: { page: query.page } })
  ).data;
  return { newsList };
}) as IGetInitialProps;

export default IndexPage;
