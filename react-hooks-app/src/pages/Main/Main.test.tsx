import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { cards } from '../../fakeData/cards';

describe('Main', () => {
  it('should be in document', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const mainPage = screen.getByTestId('main-page');
    expect(mainPage).toBeInTheDocument();

    const searchBar = screen.getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();

    const cardList = screen.getByTestId('card-list');
    expect(cardList).toBeInTheDocument();
  });

  it('filters cards based on search value', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const genreStr = 'Strategy';
    const input = screen.getByTestId('search-bar-input');
    fireEvent.change(input, { target: { value: genreStr } });
    const cardsInList = screen.getAllByTestId('game-card');
    const filteredCards = cards.filter(
      (card) =>
        card.title.includes(genreStr) || card.genreList.some((genre) => genre.includes(genreStr))
    );

    expect(cardsInList).toHaveLength(filteredCards.length);
  });

  it('filter cards based on random value', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const input = screen.getByTestId('search-bar-input');
    fireEvent.change(input, { target: { value: 'StrategyArmoryDesert' } });

    const emptyListMessage = screen.getByTestId('card-list-empty-message');
    expect(emptyListMessage).toBeInTheDocument();
  });
});
