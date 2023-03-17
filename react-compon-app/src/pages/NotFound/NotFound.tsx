import React from 'react';

import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles['not-found']}>
      <div className={styles['content']}>
        <h1>Not Found</h1>
      </div>
    </div>
  );
}

export default NotFound;
