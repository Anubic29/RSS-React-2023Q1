/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdSearch, MdClose } from 'react-icons/md';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { change, reset } from '../../redux/searchBarSlice';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onChangeHandler: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const [canReset, setCanReset] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);
  const value = useSelector((state: RootState) => state.searchBar.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const current = refInput.current;
    if (current) {
      current.value = value;
      setCanReset(!!current.value);
    }
  }, []);

  useEffect(() => {
    props.onChangeHandler(value);
  }, [value]);

  const enterValue = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement;
      dispatch(change(target.value));
    }
  }, []);

  const resetSearchBar = useCallback(() => {
    const current = refInput.current;
    if (current) {
      current.value = '';
      dispatch(reset());
      setCanReset(false);
    }
  }, []);

  return (
    <div className={styles['search']} data-testid="search-bar">
      <MdSearch className={styles['search__icon']} />
      <input
        defaultValue={''}
        type="text"
        className={`${styles['search__input']} ${canReset ? styles['reset'] : ''}`}
        onKeyDown={enterValue}
        onChange={(e) => setCanReset(!!e.target.value)}
        data-testid="search-bar-input"
        ref={refInput}
      />
      {canReset && (
        <MdClose className={styles['search__reset']} onClick={resetSearchBar} data-testid="reset" />
      )}
    </div>
  );
}

export default SearchBar;
