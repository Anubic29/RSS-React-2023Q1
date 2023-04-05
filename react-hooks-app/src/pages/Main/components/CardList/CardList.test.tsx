import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { CardType } from 'types/CardType';

const mockCardListData: CardType[] = [
  {
    title: 'Total War Rome',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/885970/header.jpg?t=1622505859',
    genreList: ['Strategy', 'RTS'],
    price: 345,
  },
  {
    title: 'Iron Harvest',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/826630/header.jpg?t=1669391758',
    genreList: ['Strategy', 'Action', 'RTS', 'Casual'],
    price: 379,
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

    const cards = screen.getAllByTestId('game-card');
    expect(cards.length).toEqual(mockCardListData.length);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];

      const image = card.querySelector('[data-testid="game-card-image"]') as HTMLImageElement;
      const title = card.querySelector('[data-testid="game-card-title"]');
      const genres = card.querySelector('[data-testid="game-card-genres"]');
      const price = card.querySelector('[data-testid="game-card-price"]');

      expect(image).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(genres).toBeInTheDocument();
      expect(price).toBeInTheDocument();

      expect(image.src).toEqual(mockCardListData[i].image);
      expect(image.alt).toEqual(mockCardListData[i].title);
      expect(title).toHaveTextContent(mockCardListData[i].title);
      expect(genres).toHaveTextContent(mockCardListData[i].genreList.join(', '));
      expect(price).toHaveTextContent(`${mockCardListData[i].price} $`);
    }
  });

  it('empty list', () => {
    render(<CardList cards={[]} />);

    const emptyListMessage = screen.getByTestId('card-list-empty-message');
    expect(emptyListMessage).toBeInTheDocument();
  });
});
