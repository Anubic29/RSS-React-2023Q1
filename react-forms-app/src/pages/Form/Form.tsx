import React, { Component } from 'react';

import styles from './Form.module.scss';

interface FormState {
  value: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Form extends Component<{}, FormState> {
  state = {
    value: '',
  };

  render() {
    return (
      <div>
        <form>
          <div className={styles['input-block']}>
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className={styles['input-block']}>
            <label htmlFor=""></label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}
