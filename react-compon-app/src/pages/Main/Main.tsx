import React, { useMemo, useState } from 'react';
import { CardList } from './components';
import { SearchBar } from '../../components/';

import { cards } from '../../fakeData/cards';

import styles from './Main.module.scss';

function Main() {
  const [searchValue, setSearchValue] = useState('');

  const cardsToDisplay = useMemo(
    () =>
      cards.filter(
        (card) =>
          card.title.includes(searchValue) ||
          card.genreList.some((genre) => genre.includes(searchValue))
      ),
    [searchValue]
  );

  return (
    <div className={styles['main']}>
      <div className={styles['content']}>
        <div className={styles['search-container']}>
          <h1 className={styles['title']}>Search:</h1>
          <SearchBar onChangeHandler={setSearchValue} />
        </div>
        <div className={styles['card-list-block']}>
          <CardList cards={cardsToDisplay} />
        </div>
      </div>
    </div>
  );
}

export default Main;
