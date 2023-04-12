import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should be in document', () => {
    render(<SearchBar onChangeHandler={() => {}} />);

    const searchBar = screen.getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  });

  it('updates the input value when the user types', () => {
    const Mocked = {
      onChangeHandler: () => undefined,
    };
    const spy = vi.spyOn(Mocked, 'onChangeHandler');
    const { getByTestId } = render(<SearchBar onChangeHandler={Mocked.onChangeHandler} />);

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

  it('sets and gets the search value from local storage', () => {
    const localStorageMock = (() => {
      let store: Record<string, string> = {};
      return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
          store[key] = value;
        },
        clear: () => {
          store = {};
        },
      };
    })();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    localStorage.setItem('search', 'stored value');

    const { getByTestId } = render(<SearchBar onChangeHandler={() => {}} />);

    const input = getByTestId('search-bar-input');
    expect(input).toHaveValue('stored value');

    fireEvent.change(input, { target: { value: 'new search value' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(input).toHaveValue('new search value');
    expect(localStorage.getItem('search')).toBe('new search value');
  });
});
