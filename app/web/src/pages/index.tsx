import { FC } from 'react';
import { IGetInitialProps, useLocation } from 'umi';
import qs from 'qs';
import fetcher from '@/utils/fetcher';
import * as moment from '@/utils/moment';
import styles from './index.less';

type PageProps = {
  newsList: any[];
  pageSize: number;
};

const IndexPage: FC<PageProps> & { getInitialProps: IGetInitialProps } = ({
  newsList = [],
  pageSize = 20,
}) => {
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const page = Number(query.page || 1);
  return (
    <div className={styles.page}>
      {newsList.map((item, index) => {
        const { by, url, title, score, time, descendants, id } = item;
        return (
          <div className={styles.item} key={id}>
            <div>
              <span className={styles.rank}>
                {pageSize * (page - 1) + index + 1}.
              </span>
            </div>
            <div className={styles.itemRight}>
              <div>
                <a className={styles.titleLink} href={url}>
                  {title}
                </a>
                {url && (
                  <span className={styles.hostname}>
                    {' '}
                    ({new URL(url).hostname})
                  </span>
                )}
              </div>
              <p className={styles.detail}>
                {score} points by {by} {moment.relativeTime(time)} |{' '}
                {descendants} comments
              </p>
            </div>
          </div>
        );
      })}
      <div className={styles.more}>
        <a href={`/?page=${page + 1}`}>More</a>
      </div>
    </div>
  );
};

IndexPage.getInitialProps = (async (ctx) => {
  const { isServer, history, pageSize } = ctx;
  const query = qs.parse(history.location.search, {
    ignoreQueryPrefix: true,
  }) as any;
  if (isServer) {
    const { service } = ctx;
    const newsList = await service.news.getNewsList(query.page);
    return { newsList, pageSize };
  }
  const newsList = await (
    await fetcher.get('/api/news', { params: { page: query.page } })
  ).data;
  return { newsList, pageSize: 20 };
}) as IGetInitialProps;

export default IndexPage;
