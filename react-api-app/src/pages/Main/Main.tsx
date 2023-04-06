import React, { useCallback, useState } from 'react';
import api from '../../api';
import { CardList } from './components';
import { Preloader, SearchBar } from '../../components/';
import { CharacterType } from 'types/CharacterType';

import styles from './Main.module.scss';

function Main() {
  const [isLoaderActive, setIsLoaderActive] = useState(false);
  const [characterArr, setCharacterArr] = useState<CharacterType[]>([]);

  const updateList = useCallback(async (value: string) => {
    setIsLoaderActive(true);
    try {
      const response = await api.character.getDataAll(value);
      const data = response.data;
      if (data) {
        setCharacterArr(response.data.results);
      }
    } catch (error) {
      setCharacterArr([]);
    } finally {
      setIsLoaderActive(false);
    }
  }, []);

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
