/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import { Input, Select } from '../../components';
import { FormCardList } from './components';
import { FormCardType } from 'types/CardType';

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
  errors: { [key: string]: string };
  cards: FormCardType[];
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
    errors: { userNameError: '', dateError: '', selectError: '' },
    cards: [],
  };

  validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!this.state.inputUsernameRef.current?.value) {
      errors.userNameError = "Username can't be empty";
    } else if (this.state.inputUsernameRef.current?.value.length < 4) {
      errors.userNameError = 'Username must be longer than 3 letters';
    }

    if (!this.state.inputDateRef.current?.value) {
      errors.dateError = "Date can't be empty";
    }

    if (!this.state.selectCountryRef.current?.value) {
      errors.selectError = 'You must select a country';
    }

    this.setState({ errors });

    return !Object.values(errors).some((error) => error.length > 0);
  };

  resetForm = () => {
    if (this.state.inputUsernameRef.current) {
      this.state.inputUsernameRef.current.value = '';
    }

    if (this.state.inputDateRef.current) {
      this.state.inputDateRef.current.value = '';
    }

    if (this.state.selectCountryRef.current) {
      this.state.selectCountryRef.current.value = '';
    }

    if (this.state.firstCheckRef.current) {
      this.state.firstCheckRef.current.checked = false;
    }
    if (this.state.secondCheckRef.current) {
      this.state.secondCheckRef.current.checked = false;
    }
    if (this.state.thirdCheckRef.current) {
      this.state.thirdCheckRef.current.checked = false;
    }
    if (this.state.fourthCheckRef.current) {
      this.state.fourthCheckRef.current.checked = false;
    }

    if (this.state.inputSwitchRef.current) {
      this.state.inputSwitchRef.current.checked = false;
    }

    if (this.state.inputFileRef.current) {
      this.state.inputFileRef.current.value = '';
    }
  };

  onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validateForm()) {
      const skills = [
        this.state.firstCheckRef,
        this.state.secondCheckRef,
        this.state.thirdCheckRef,
        this.state.fourthCheckRef,
      ].filter((elem) => elem.current?.checked);
      const card: FormCardType = {
        userName: `${this.state.inputUsernameRef.current?.value}`,
        date: `${this.state.inputDateRef.current?.value}`,
        country: `${this.state.selectCountryRef.current?.value}`,
        skills: skills.length > 0 ? skills.map((elem) => elem.current?.value).join(', ') : 'None',
        type: this.state.inputSwitchRef.current?.checked ? 'Premium' : 'Basic',
        file: `${this.state.inputFileRef.current?.value}`,
      };

      if (card.file === '') card.file = 'None file';

      this.setState({ cards: [...this.state.cards, card] });
      this.resetForm();
    }
  };

  render() {
    return (
      <div className={styles['form-page']} data-testid="form-page">
        <div className={styles['content']}>
          <form className={styles['form']} onSubmit={this.onSubmitHandler}>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="user-name">
                Username
              </label>
              <Input
                type="text"
                id="user-name"
                inputRef={this.state.inputUsernameRef}
                isValid={!this.state.errors.userNameError}
                invalidMessage={this.state.errors.userNameError}
              />
            </div>
            <div className={styles['input-block']}>
              <label className={styles['label']} htmlFor="date">
                Birthday
              </label>
              <Input
                type="date"
                id="date"
                inputRef={this.state.inputDateRef}
                isValid={!this.state.errors.dateError}
                invalidMessage={this.state.errors.dateError}
              />
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
                isValid={!this.state.errors.selectError}
                invalidMessage={this.state.errors.selectError}
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
                  <input type="checkbox" ref={this.state.inputSwitchRef} data-testid="switch" />
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
          <div className={styles['card-list-section']}>
            <h1 className={styles['title']}>Card List</h1>
            <FormCardList cards={this.state.cards} />
          </div>
        </div>
      </div>
    );
  }
}
