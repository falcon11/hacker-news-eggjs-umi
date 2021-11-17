import React, { FC } from 'react';
import styles from './index.less';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr className={styles.divider} />
      <span>
        Powered By <a href={'https://eggjs.org/'}>Eggjs</a> +{' '}
        <a href={'https://umijs.org/'}>Umi</a>
      </span>
      <br />
      <span>
        Author: <a href={'https://github.com/falcon11'}>Ashoka</a>
      </span>
    </div>
  );
};

export default Footer;
