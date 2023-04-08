import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { CharacterType } from 'types/CharacterType';

const mockCardListData: CharacterType[] = [
  {
    created: '2017-11-04T18:48:46.250Z',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    gender: 'Male',
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    name: 'Rick Sanchez',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/1',
  },
  {
    created: '2017-11-04T20:33:30.779Z',
    episode: ['https://rickandmortyapi.com/api/episode/31'],
    gender: 'unknown',
    id: 13,
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    name: 'Alien Googah',
    origin: { name: 'unknown', url: '' },
    species: 'Alien',
    status: 'unknown',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/13',
  },
];

describe('CardList', () => {
  it('should be in document', () => {
    render(<CardList cards={mockCardListData} />);

    const cardList = screen.getByTestId('card-list');
    expect(cardList).toBeInTheDocument();
  });

  it('correct list', () => {
    render(<CardList cards={mockCardListData} />);

    const cards = screen.getAllByTestId('character-card');
    expect(cards.length).toEqual(mockCardListData.length);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];

      const image = card.querySelector('[data-testid="character-card-image"]') as HTMLImageElement;
      const name = card.querySelector('[data-testid="character-card-name"]');

      expect(image).toBeInTheDocument();
      expect(name).toBeInTheDocument();

      expect(image.src).toEqual(mockCardListData[i].image);
      expect(image.alt).toEqual(mockCardListData[i].name);
      expect(name).toHaveTextContent(mockCardListData[i].name);
    }
  });

  it('empty list', () => {
    render(<CardList cards={[]} />);

    const emptyListMessage = screen.getByTestId('card-list-empty-message');
    expect(emptyListMessage).toBeInTheDocument();
  });
});
