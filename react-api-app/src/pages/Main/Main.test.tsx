import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
// import { CharacterType } from 'types/CharacterType';

// const mockCardListData: CharacterType[] = [
//   {
//     created: '2017-11-04T18:48:46.250Z',
//     episode: ['https://rickandmortyapi.com/api/episode/1'],
//     gender: 'Male',
//     id: 1,
//     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
//     name: 'Rick Sanchez',
//     origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
//     species: 'Human',
//     status: 'Alive',
//     type: '',
//     url: 'https://rickandmortyapi.com/api/character/1',
//   },
//   {
//     created: '2017-11-04T20:33:30.779Z',
//     episode: ['https://rickandmortyapi.com/api/episode/31'],
//     gender: 'unknown',
//     id: 13,
//     image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
//     location: {
//       name: 'Earth (Replacement Dimension)',
//       url: 'https://rickandmortyapi.com/api/location/20',
//     },
//     name: 'Alien Googah',
//     origin: { name: 'unknown', url: '' },
//     species: 'Alien',
//     status: 'unknown',
//     type: '',
//     url: 'https://rickandmortyapi.com/api/character/13',
//   },
// ];

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

  it('correct data get from api', async () => {
    const { findAllByTestId } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    expect((await findAllByTestId('character-card')).length).toEqual(2);
  });

  it('filter cards based on random value', async () => {
    const { findByTestId } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const input = screen.getByTestId('search-bar-input');
    fireEvent.change(input, { target: { value: 'asdqwerty' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    const emptyListMessage = await findByTestId('card-list-empty-message');
    expect(emptyListMessage).toBeDefined();
  });
});
