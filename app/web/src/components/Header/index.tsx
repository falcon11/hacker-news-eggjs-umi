import React, { FC } from 'react';
import styles from './index.less';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <b className={styles.title}>Hacker News</b>
    </div>
  );
};

export default Header;
