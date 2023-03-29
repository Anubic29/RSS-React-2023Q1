import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { Input, Select } from '../../components';
import { FormCardList } from './components';
import { FormCardType } from 'types/CardType';

import styles from './Form.module.scss';

function Form() {
  const { register, handleSubmit, reset } = useForm();
  const [cards, setCards] = useState<FormCardType[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [saved, setSaved] = useState(false);

  const validateForm = useCallback((data: FieldValues) => {
    const errors: { [key: string]: string } = {};

    if (!data['userName']) {
      errors.userNameError = "Username can't be empty";
    } else if (data['userName'].length < 4) {
      errors.userNameError = 'Username must be longer than 3 letters';
    }

    if (!data['date']) {
      errors.dateError = "Date can't be empty";
    }

    if (!data['country']) {
      errors.selectError = 'You must select a country';
    }

    if (!data['language']) {
      errors.radioError = 'You must select a language';
    }

    setErrors(errors);

    return !Object.values(errors).some((error) => error.length > 0);
  }, []);

  const onSubmitHandler: SubmitHandler<FieldValues> = useCallback(
    (data) => {
      if (validateForm(data)) {
        const card: FormCardType = {
          userName: data['userName'],
          date: data['date'],
          country: data['country'],
          skills: data['skills'].length > 0 ? data['skills'].join(', ') : 'None',
          language: data['language'],
          type: data['type'] ? 'Premium' : 'Basic',
          file: data['file'].length > 0 ? data['file'][0]['name'] : 'None',
        };

        setCards((prev) => prev.concat([card]));
        setSaved(true);
        setTimeout(() => {
          setSaved(false);
        }, 3000);
        reset();
      }
    },
    [validateForm, reset]
  );

  return (
    <div className={styles['form-page']} data-testid="form-page">
      <div className={styles['content']}>
        <form className={styles['form']} onSubmit={handleSubmit(onSubmitHandler)}>
          <div className={styles['input-block']}>
            <label className={styles['label']} htmlFor="user-name">
              Username
            </label>
            <Input
              type="text"
              id="user-name"
              isValid={!errors.userNameError}
              invalidMessage={errors.userNameError}
              register={register('userName')}
            />
          </div>
          <div className={styles['input-block']}>
            <label className={styles['label']} htmlFor="date">
              Birthday
            </label>
            <Input
              type="date"
              id="date"
              isValid={!errors.dateError}
              invalidMessage={errors.dateError}
              register={register('date')}
            />
          </div>
          <div className={styles['input-block']}>
            <label className={styles['label']} htmlFor="select">
              Country
            </label>
            <Select
              id="select"
              title="country"
              values={['Ukraine', 'USA', 'Mexico', 'Spain', 'France']}
              isValid={!errors.selectError}
              invalidMessage={errors.selectError}
              register={register('country')}
            />
          </div>
          <div className={styles['input-block']}>
            <p className={styles['label']}>Skills</p>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="checkbox"
                value="HTML"
                {...register('skills')}
              />
              HTML
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="checkbox"
                value="CSS"
                {...register('skills')}
              />
              CSS
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="checkbox"
                value="JavaScript"
                {...register('skills')}
              />
              JavaScript
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="checkbox"
                value="React"
                {...register('skills')}
              />
              React
            </label>
          </div>
          <div className={styles['input-block']}>
            <p className={styles['label']}>Language</p>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="radio"
                value="English"
                {...register('language')}
              />
              English
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="radio"
                value="Spanish"
                {...register('language')}
              />
              Spanish
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="radio"
                value="Chinese"
                {...register('language')}
              />
              Chinese
            </label>
            <label className={styles['check-block']}>
              <input
                className={styles['input']}
                type="radio"
                value="Ukrainian"
                {...register('language')}
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
                <input type="checkbox" data-testid="switch" {...register('type')} />
                <span className={styles['slider']}></span>
              </label>
              <p>Premium</p>
            </div>
          </div>
          <div className={styles['input-block']}>
            <label className={styles['label']} htmlFor="file">
              File
            </label>
            <Input type="file" id="file" register={register('file')} />
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
