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

  onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Submit');
  }

  render() {
    return (
      <div className={styles['form-page']}>
        <div className={styles['content']}>
          <form className={styles['form']} onSubmit={this.onSubmitHandler}>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="user-name">
                Username
              </label>
              <input className={styles['input']} type="text" id="user-name" />
            </div>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="date">
                Birthday
              </label>
              <input className={styles['input']} type="date" id="date" />
            </div>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="select">
                Country
              </label>
              <select className={`${styles['input']} ${styles['select']}`} id="select">
                <option value="" disabled={true}>
                  Select country
                </option>
                <option value="Ukraine">Ukraine</option>
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Spain">Spain</option>
                <option value="France">France</option>
              </select>
            </div>
            <div className={styles['input-block']}>
              <p className={styles['label']}>Skills</p>
              <label className={styles['check-block']}>
                <input className={styles['input']} type="checkbox" /> HTML
              </label>
              <label className={styles['check-block']}>
                <input className={styles['input']} type="checkbox" /> CSS
              </label>
              <label className={styles['check-block']}>
                <input className={styles['input']} type="checkbox" /> JavaScript
              </label>
              <label className={styles['check-block']}>
                <input className={styles['input']} type="checkbox" /> React
              </label>
            </div>
            <div className={styles['input-block']}>
              <p className={styles['label']}>Type</p>
              <div className={styles['switch-block']}>
                <p>Basic</p>
                <label className={styles['switch']}>
                  <input type="checkbox" />
                  <span className={styles['slider']}></span>
                </label>
                <p>Premium</p>
              </div>
            </div>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="file">
                File
              </label>
              <input className={styles['input']} type="file" id="file" />
            </div>
            <div className={styles['btn-block']}>
              <button className={styles['button']} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
