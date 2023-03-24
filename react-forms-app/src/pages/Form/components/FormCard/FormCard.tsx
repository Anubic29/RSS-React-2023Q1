import React, { Component } from 'react';

import styles from './FormCard.module.scss';

interface FormCardProps {
  id: number;
  userName: string;
  date: string;
  country: string;
  skills: string;
  language: string;
  type: string;
  file: string;
}

export default class FormCard extends Component<FormCardProps> {
  render() {
    const { id, userName, ...rest } = this.props;

    return (
      <div className={styles['card']} data-testid="form-card">
        <div className={styles['title-block']}>
          <h1 className={styles['title']} data-testid="form-card-title">
            {id}. {userName}
          </h1>
        </div>
        <ul className={styles['param-list']}>
          {Object.entries(rest).map((param, idx) => (
            <li key={idx} className={styles['param']}>
              <span className={styles['subtitle']}>{param[0]}:</span>
              <span className={styles['value']} data-testid={`form-card-${param[0]}`}>
                {param[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
