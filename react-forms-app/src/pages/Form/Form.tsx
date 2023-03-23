import React, { Component } from 'react';
import { Input, Select } from '../../components';

import styles from './Form.module.scss';

interface FormState {
  inputUsernameRef: React.LegacyRef<HTMLInputElement>;
  inputDateRef: React.LegacyRef<HTMLInputElement>;
  selectCountryRef: React.LegacyRef<HTMLSelectElement>;
  firstCheckRef: React.LegacyRef<HTMLInputElement>;
  secondCheckRef: React.LegacyRef<HTMLInputElement>;
  thirdCheckRef: React.LegacyRef<HTMLInputElement>;
  fourthCheckRef: React.LegacyRef<HTMLInputElement>;
  inputSwitchRef: React.LegacyRef<HTMLInputElement>;
  inputFileRef: React.LegacyRef<HTMLInputElement>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Form extends Component<{}, FormState> {
  state = {
    inputUsernameRef: React.createRef<HTMLInputElement>(),
    inputDateRef: React.createRef<HTMLInputElement>(),
    selectCountryRef: React.createRef<HTMLSelectElement>(),
    firstCheckRef: React.createRef<HTMLInputElement>(),
    secondCheckRef: React.createRef<HTMLInputElement>(),
    thirdCheckRef: React.createRef<HTMLInputElement>(),
    fourthCheckRef: React.createRef<HTMLInputElement>(),
    inputSwitchRef: React.createRef<HTMLInputElement>(),
    inputFileRef: React.createRef<HTMLInputElement>(),
  };

  onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(this.state.inputUsernameRef.current?.value);
    console.log(this.state.inputDateRef.current?.value);
    console.log(this.state.selectCountryRef.current?.value);
    console.log(this.state.firstCheckRef.current?.checked);
    console.log(this.state.secondCheckRef.current?.checked);
    console.log(this.state.thirdCheckRef.current?.checked);
    console.log(this.state.inputSwitchRef.current?.checked);
    console.log(this.state.inputSwitchRef.current?.checked);
    console.log(this.state.inputFileRef.current?.value);
  };

  render() {
    return (
      <div className={styles['form-page']}>
        <div className={styles['content']}>
          <form className={styles['form']} onSubmit={this.onSubmitHandler}>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="user-name">
                Username
              </label>
              <Input type="text" id="user-name" inputRef={this.state.inputUsernameRef} />
            </div>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="date">
                Birthday
              </label>
              <Input type="date" id="date" inputRef={this.state.inputDateRef} />
            </div>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="select">
                Country
              </label>
              <Select
                id="select"
                selectRef={this.state.selectCountryRef}
                title="country"
                values={['Ukraine', 'USA', 'Mexico', 'Spain', 'France']}
              />
            </div>
            <div className={styles['input-block']}>
              <p className={styles['label']}>Skills</p>
              <label className={styles['check-block']}>
                <input
                  className={styles['input']}
                  type="checkbox"
                  ref={this.state.firstCheckRef}
                  value="HTML"
                />
                HTML
              </label>
              <label className={styles['check-block']}>
                <input
                  className={styles['input']}
                  type="checkbox"
                  ref={this.state.secondCheckRef}
                  value="CSS"
                />
                CSS
              </label>
              <label className={styles['check-block']}>
                <input
                  className={styles['input']}
                  type="checkbox"
                  ref={this.state.thirdCheckRef}
                  value="JavaScript"
                />
                JavaScript
              </label>
              <label className={styles['check-block']}>
                <input
                  className={styles['input']}
                  type="checkbox"
                  ref={this.state.fourthCheckRef}
                  value="React"
                />
                React
              </label>
            </div>
            <div className={styles['input-block']}>
              <p className={styles['label']}>Type</p>
              <div className={styles['switch-block']}>
                <p>Basic</p>
                <label className={styles['switch']}>
                  <input type="checkbox" ref={this.state.inputSwitchRef} />
                  <span className={styles['slider']}></span>
                </label>
                <p>Premium</p>
              </div>
            </div>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="file">
                File
              </label>
              <Input type="file" id="file" inputRef={this.state.inputFileRef} />
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
