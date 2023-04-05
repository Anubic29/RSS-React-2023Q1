import React, { useState } from 'react';
import { CardList } from './components';
import { SearchBar } from '../../components/';

import { cards } from '../../fakeData/cards';

import styles from './Main.module.scss';

function Main() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles['main']} data-testid="main-page">
      <div className={styles['content']}>
        <div className={styles['search-container']}>
          <h1 className={styles['title']}>Search:</h1>
          <SearchBar onChangeHandler={(value: string) => setSearchValue(value)} />
        </div>
        <div className={styles['card-list-block']}>
          <CardList
            cards={cards.filter(
              (card) =>
                card.title.includes(searchValue) ||
                card.genreList.some((genre) => genre.includes(searchValue))
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
