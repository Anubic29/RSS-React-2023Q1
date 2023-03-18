import React, { useMemo, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Card } from './components';

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
          <div className={styles['search']}>
            <MdSearch className={styles['search__icon']} />
            <input
              type="text"
              className={styles['search__input']}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
        </div>
        <div className={styles['card-list']}>
          {cardsToDisplay.length > 0 ? (
            cardsToDisplay.map((card, idx) => (
              <div className={styles['card-block']} key={idx}>
                <Card
                  title={card.title}
                  image={card.image}
                  genreList={card.genreList}
                  price={`${card.price}`}
                />
              </div>
            ))
          ) : (
            <h1>List is empty</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
