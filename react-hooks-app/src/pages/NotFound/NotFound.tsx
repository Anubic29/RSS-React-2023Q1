import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles['not-found']} data-testid="not-found-page">
      <div className={styles['content']}>
        <div className={styles['block']}>
          <p className={styles['number']}>404</p>
          <div className={styles['block-content']}>
            <h1 className={styles['title']}>The page you are looking for is not exist</h1>
            <Link to="/" className={styles['link']}>
              Go to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
