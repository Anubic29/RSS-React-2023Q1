/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdSearch, MdClose } from 'react-icons/md';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onChangeHandler: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const [canReset, setCanReset] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const current = refInput.current;
    if (current) {
      current.value = localStorage.getItem('search') || '';
      props.onChangeHandler(current.value);
      setCanReset(!!current.value);
    }

    return () => {
      localStorage.setItem('search', current?.value || '');
    };
  }, []);

  const resetSearchBar = useCallback(() => {
    const current = refInput.current;
    if (current) {
      current.value = '';
      props.onChangeHandler(current.value);
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
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.onChangeHandler((e.target as HTMLInputElement).value);
          }
        }}
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
