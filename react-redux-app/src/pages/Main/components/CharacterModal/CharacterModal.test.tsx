import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterModal from './CharacterModal';

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

describe('CharacterModal', () => {
  it('should be in document', () => {
    render(<CharacterModal data={mockCardData} />);

    const characterModal = screen.getByTestId('character-modal');
    expect(characterModal).toBeInTheDocument();
  });
});
