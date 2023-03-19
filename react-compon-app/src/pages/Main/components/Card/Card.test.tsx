import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockCardData = {
  title: 'Total War Rome',
  image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/885970/header.jpg?t=1622505859',
  genreList: ['Strategy', 'RTS'],
  price: 345,
};

describe('Card', () => {
  it('should be in document', () => {
    render(
      <Card
        title={mockCardData.title}
        image={mockCardData.image}
        genreList={mockCardData.genreList}
        price={`${mockCardData.price}`}
      />
    );

    const card = screen.getByTestId('game-card');
    expect(card).toBeInTheDocument();
  });

  it('correct data', () => {
    render(
      <Card
        title={mockCardData.title}
        image={mockCardData.image}
        genreList={mockCardData.genreList}
        price={`${mockCardData.price}`}
      />
    );

    const image = screen.getByTestId('game-card-image') as HTMLImageElement;
    const title = screen.getByTestId('game-card-title');
    const genres = screen.getByTestId('game-card-genres');
    const price = screen.getByTestId('game-card-price');

    expect(image.src).toEqual(mockCardData.image);
    expect(image.alt).toEqual(mockCardData.title);
    expect(title).toHaveTextContent(mockCardData.title);
    expect(genres).toHaveTextContent(mockCardData.genreList.join(', '));
    expect(price).toHaveTextContent(`${mockCardData.price} $`);
  });

  it('long data', () => {
    render(
      <Card
        title={'Title is very long !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'}
        image={mockCardData.image}
        genreList={['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5']}
        price={`${mockCardData.price}`}
      />
    );

    const title = screen.getByTestId('game-card-title');
    const genres = screen.getByTestId('game-card-genres');

    expect(title).toHaveTextContent('Title is very long !!!!!!!!!!!!!!!!');
    expect(genres).toHaveTextContent('Genre1, Genre2, Genre3, Genre4,');
  });
});
