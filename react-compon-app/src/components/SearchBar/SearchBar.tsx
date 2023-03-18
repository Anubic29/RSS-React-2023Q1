import React, { ChangeEvent, Component } from 'react';
import { MdSearch } from 'react-icons/md';

import styles from './SearchBar.module.scss';

interface SearchBarState {
  value: string;
}

interface SearchBarProps {
  onChangeHandler: (value: string) => void;
}

export default class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    value: '',
  };

  componentDidMount = () => {
    const value = localStorage.getItem('search') || '';
    this.setState({ value }, () => this.props.onChangeHandler(value));
  };

  componentWillUnmount = () => {
    localStorage.setItem('search', this.state.value);
  };

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value }, () => this.props.onChangeHandler(e.target.value));
  };

  render() {
    return (
      <div className={styles['search']}>
        <MdSearch className={styles['search__icon']} />
        <input
          type="text"
          className={styles['search__input']}
          value={this.state.value}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}
