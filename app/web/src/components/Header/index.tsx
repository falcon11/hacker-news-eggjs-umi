import React, { FC } from 'react';
import styles from './index.less';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <a href="/">
        <b className={styles.title}>Hacker News</b>
      </a>
    </div>
  );
};

export default Header;
