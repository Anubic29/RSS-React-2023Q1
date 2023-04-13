import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should be in document', () => {
    renderWithProviders(<SearchBar onChangeHandler={() => {}} />);

    const searchBar = screen.getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  });

  it('updates the input value when the user types', () => {
    const Mocked = {
      onChangeHandler: () => undefined,
    };
    const spy = vi.spyOn(Mocked, 'onChangeHandler');
    const { getByTestId } = renderWithProviders(
      <SearchBar onChangeHandler={Mocked.onChangeHandler} />
    );

    const input = getByTestId('search-bar-input');
    fireEvent.change(input, { target: { value: 'new search value' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(input).toHaveValue('new search value');
    expect(spy).toHaveBeenCalledWith('new search value');

    const resetBtn = getByTestId('reset');
    fireEvent.click(resetBtn);

    expect(input).toHaveValue('');
    expect(spy).toHaveBeenCalledWith('');
  });
});
