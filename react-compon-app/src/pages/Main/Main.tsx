import React from 'react';

import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles['main']}>
      <div className={styles['content']}>
        <h1>Main</h1>
      </div>
    </div>
  );
}

export default Main;
