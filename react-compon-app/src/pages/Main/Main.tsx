import React from 'react';
import { MdSearch } from 'react-icons/md';

import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles['main']}>
      <div className={styles['content']}>
        <div className={styles['search-container']}>
          <h1 className={styles['title']}>Search:</h1>
          <div className={styles['search']}>
            <MdSearch className={styles['search__icon']} />
            <input type="text" className={styles['search__input']} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
