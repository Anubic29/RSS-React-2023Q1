import React, { useCallback, useState } from 'react';
import type { AppDispatch, RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharactersByTitle } from '../../redux/characterArrSlice';
import { CardList } from './components';
import { Preloader, SearchBar } from '../../components/';

import styles from './Main.module.scss';

function Main() {
  const characterArr = useSelector((state: RootState) => state.characterArr.value);
  const dispatch: AppDispatch = useDispatch();
  const [isLoaderActive, setIsLoaderActive] = useState(false);

  const updateList = useCallback(
    async (value: string) => {
      setIsLoaderActive(true);
      await dispatch(fetchCharactersByTitle(value));
      setIsLoaderActive(false);
    },
    [dispatch]
  );

  return (
    <div className={styles['main']} data-testid="main-page">
      <div className={styles['content']}>
        <div className={styles['search-container']}>
          <h1 className={styles['title']}>Search:</h1>
          <SearchBar
            onChangeHandler={(value: string) => {
              updateList(value);
            }}
          />
          {isLoaderActive && (
            <div className={styles['preloader-block']}>
              <Preloader />
            </div>
          )}
        </div>
        <div className={styles['card-list-block']}>
          <CardList cards={characterArr} />
        </div>
      </div>
    </div>
  );
}

export default Main;
