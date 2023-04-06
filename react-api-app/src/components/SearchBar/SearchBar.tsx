/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { MdSearch } from 'react-icons/md';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onChangeHandler: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const current = refInput.current;
    if (current) {
      current.value = localStorage.getItem('search') || '';
      props.onChangeHandler(current.value);
    }

    return () => {
      localStorage.setItem('search', current?.value || '');
    };
  }, []);

  return (
    <div className={styles['search']} data-testid="search-bar">
      <MdSearch className={styles['search__icon']} />
      <input
        defaultValue={''}
        type="text"
        className={styles['search__input']}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.onChangeHandler((e.target as HTMLInputElement).value);
          }
        }}
        data-testid="search-bar-input"
        ref={refInput}
      />
    </div>
  );
}

export default SearchBar;
