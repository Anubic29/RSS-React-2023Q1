import React, { useCallback, useRef, useState } from 'react';
import { Input, Select } from '../../components';
import { FormCardList } from './components';
import { FormCardType } from 'types/CardType';

import styles from './Form.module.scss';

function Form() {
  const [cards, setCards] = useState<FormCardType[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [saved, setSaved] = useState(false);

  const inputUsernameRef = useRef<HTMLInputElement>(null);
  const inputDateRef = useRef<HTMLInputElement>(null);
  const selectCountryRef = useRef<HTMLSelectElement>(null);
  const firstCheckRef = useRef<HTMLInputElement>(null);
  const secondCheckRef = useRef<HTMLInputElement>(null);
  const thirdCheckRef = useRef<HTMLInputElement>(null);
  const fourthCheckRef = useRef<HTMLInputElement>(null);
  const firstRadioRef = useRef<HTMLInputElement>(null);
  const secondRadioRef = useRef<HTMLInputElement>(null);
  const thirdRadioRef = useRef<HTMLInputElement>(null);
  const fourthRadioRef = useRef<HTMLInputElement>(null);
  const inputSwitchRef = useRef<HTMLInputElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const validateForm = useCallback(() => {
    const errors: { [key: string]: string } = {};

    if (!inputUsernameRef.current?.value) {
      errors.userNameError = "Username can't be empty";
    } else if (inputUsernameRef.current?.value.length < 4) {
      errors.userNameError = 'Username must be longer than 3 letters';
    }

    if (!inputDateRef.current?.value) {
      errors.dateError = "Date can't be empty";
    }

    if (!selectCountryRef.current?.value) {
      errors.selectError = 'You must select a country';
    }

    if (
      !firstRadioRef.current?.checked &&
      !secondRadioRef.current?.checked &&
      !thirdRadioRef.current?.checked &&
      !fourthRadioRef.current?.checked
    ) {
      errors.radioError = 'You must select a language';
    }

    setErrors(errors);

    return !Object.values(errors).some((error) => error.length > 0);
  }, []);

  const resetForm = useCallback(() => {
    if (inputUsernameRef.current) {
      inputUsernameRef.current.value = '';
    }

    if (inputDateRef.current) {
      inputDateRef.current.value = '';
    }

    if (selectCountryRef.current) {
      selectCountryRef.current.value = '';
    }

    if (firstCheckRef.current) {
      firstCheckRef.current.checked = false;
    }
    if (secondCheckRef.current) {
      secondCheckRef.current.checked = false;
    }
    if (thirdCheckRef.current) {
      thirdCheckRef.current.checked = false;
    }
    if (fourthCheckRef.current) {
      fourthCheckRef.current.checked = false;
    }

    if (firstRadioRef.current) {
      firstRadioRef.current.checked = false;
    }
    if (secondRadioRef.current) {
      secondRadioRef.current.checked = false;
    }
    if (thirdRadioRef.current) {
      thirdRadioRef.current.checked = false;
    }
    if (fourthRadioRef.current) {
      fourthRadioRef.current.checked = false;
    }

    if (inputSwitchRef.current) {
      inputSwitchRef.current.checked = false;
    }

    if (inputFileRef.current) {
      inputFileRef.current.value = '';
    }
  }, []);

  const onSubmitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (validateForm()) {
        const skills = [firstCheckRef, secondCheckRef, thirdCheckRef, fourthCheckRef].filter(
          (elem) => elem.current?.checked
        );
        const language = [firstRadioRef, secondRadioRef, thirdRadioRef, fourthRadioRef].filter(
          (elem) => elem.current?.checked
        );
        const card: FormCardType = {
          userName: `${inputUsernameRef.current?.value}`,
          date: `${inputDateRef.current?.value}`,
          country: `${selectCountryRef.current?.value}`,
          skills: skills.length > 0 ? skills.map((elem) => elem.current?.value).join(', ') : 'None',
          language: `${language[0].current?.value}`,
          type: inputSwitchRef.current?.checked ? 'Premium' : 'Basic',
          file: `${inputFileRef.current?.value}`,
        };

        if (card.file === '') card.file = 'None file';

        setCards((prev) => prev.concat([card]));
        setSaved(true);
        setTimeout(() => {
          setSaved(false);
        }, 3000);
        resetForm();
      }
    },
    [validateForm, resetForm]
  );

  return (
    <div className={styles['form-page']} data-testid="form-page">
      <div className={styles['content']}>
        <form className={styles['form']} onSubmit={onSubmitHandler}>
          <div className={styles['input-block']}>
            <label className={styles['label']} htmlFor="user-name">
              Username
            </label>
            <Input
              type="text"
              id="user-name"
              inputRef={inputUsernameRef}
              isValid={!errors.userNameError}
              invalidMessage={errors.userNameError}
            />
          </div>
          <div className={styles['input-block']}>
            <label className={styles['label']} htmlFor="date">
              Birthday
            </label>
            <Input
              type="date"
              id="date"
              inputRef={inputDateRef}
              isValid={!errors.dateError}
              invalidMessage={errors.dateError}
            />
          </div>
          <div className={styles['input-block']}>
            <label className={styles['label']} htmlFor="select">
              Country
            </label>
            <Select
              id="select"
              selectRef={selectCountryRef}
              title="country"
              values={['Ukraine', 'USA', 'Mexico', 'Spain', 'France']}
              isValid={!errors.selectError}
              invalidMessage={errors.selectError}
            />
          </div>
          <div className={styles['input-block']}>
            <p className={styles['label']}>Skills</p>
            <label className={styles['check-block']}>
              <input className={styles['input']} type="checkbox" ref={firstCheckRef} value="HTML" />
              HTML
            </label>
            <label className={styles['check-block']}>
              <input className={styles['input']} type="checkbox" ref={secondCheckRef} value="CSS" />
              CSS
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="checkbox"
                ref={thirdCheckRef}
                value="JavaScript"
              />
              JavaScript
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="checkbox"
                ref={fourthCheckRef}
                value="React"
              />
              React
            </label>
          </div>
          <div className={styles['input-block']}>
            <p className={styles['label']}>Language</p>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                name="language"
                type="radio"
                ref={firstRadioRef}
                value="English"
              />
              English
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                name="language"
                type="radio"
                ref={secondRadioRef}
                value="Spanish"
              />
              Spanish
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                name="language"
                type="radio"
                ref={thirdRadioRef}
                value="Chinese"
              />
              Chinese
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                name="language"
                type="radio"
                ref={fourthRadioRef}
                value="Ukrainian"
              />
              Ukrainian
            </label>
            {errors.radioError && (
              <p className={styles['error-message']} data-testid="error-message">
                {errors.radioError}
              </p>
            )}
          </div>
          <div className={styles['input-block']}>
            <p className={styles['label']}>Type</p>
            <div className={styles['switch-block']}>
              <p>Basic</p>
              <label className={styles['switch']}>
                <input type="checkbox" ref={inputSwitchRef} data-testid="switch" />
                <span className={styles['slider']}></span>
              </label>
              <p>Premium</p>
            </div>
          </div>
          <div className={styles['input-block']}>
            <label className={styles['label']} htmlFor="file">
              File
            </label>
            <Input type="file" id="file" inputRef={inputFileRef} />
          </div>
          <div className={styles['btn-block']}>
            <button className={styles['button']} type="submit">
              Submit
            </button>
            {saved && <div className={styles['saved']}>Saved</div>}
          </div>
        </form>
        <div className={styles['card-list-section']}>
          <h1 className={styles['title']}>Card List</h1>
          <FormCardList cards={cards} />
        </div>
      </div>
    </div>
  );
}

export default Form;
