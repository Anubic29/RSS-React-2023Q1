import React, { Component } from 'react';
import { CardList } from './components';
import { SearchBar } from '../../components/';

import { cards } from '../../fakeData/cards';

import styles from './Main.module.scss';

interface MainState {
  searchValue: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Main extends Component<{}, MainState> {
  state = {
    searchValue: '',
  };

  onChangeSearchHandler = (value: string) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <div className={styles['main']} data-testid="main-page">
        <div className={styles['content']}>
          <div className={styles['search-container']}>
            <h1 className={styles['title']}>Search:</h1>
            <SearchBar onChangeHandler={this.onChangeSearchHandler} />
          </div>
          <div className={styles['card-list-block']}>
            <CardList
              cards={cards.filter(
                (card) =>
                  card.title.includes(this.state.searchValue) ||
                  card.genreList.some((genre) => genre.includes(this.state.searchValue))
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
