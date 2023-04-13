import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/test-utils';
import Main from './Main';

describe('Main', () => {
  it('should be in document', () => {
    renderWithProviders(
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
    const { findAllByTestId } = renderWithProviders(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    expect((await findAllByTestId('character-card')).length).toEqual(2);
  });

  it('filter cards based on random value', async () => {
    const { findByTestId } = renderWithProviders(
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
