import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockCardData = {
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
};

describe('Card', () => {
  it('should be in document', () => {
    render(<Card data={mockCardData} />);

    const card = screen.getByTestId('character-card');
    expect(card).toBeInTheDocument();
  });

  it('correct data', () => {
    render(<Card data={mockCardData} />);

    const image = screen.getByTestId('character-card-image') as HTMLImageElement;
    const name = screen.getByTestId('character-card-name');

    expect(image.src).toEqual(mockCardData.image);
    expect(image.alt).toEqual(mockCardData.name);
    expect(name).toHaveTextContent(mockCardData.name);
  });

  it('long data', () => {
    const nameValue = 'Title is very long !!!!!!!!!!!!!!!!';
    const obj = Object.assign(mockCardData, { name: nameValue });
    render(<Card data={obj} />);

    const name = screen.getByTestId('character-card-name');

    expect(name).toHaveTextContent(nameValue);
  });
});
