import React, { Component } from 'react';
import { FormCard } from '../';
import { FormCardType } from 'types/CardType';

import styles from './FormCardList.module.scss';

interface FormCardListProps {
  cards: FormCardType[];
}

export default class FormCardList extends Component<FormCardListProps> {
  render() {
    return (
      <div className={styles['card-list']} data-testid="card-list">
        {this.props.cards.length > 0 ? (
          this.props.cards.map((card, idx) => (
            <div className={styles['card-block']} key={idx}>
              <FormCard
                id={idx + 1}
                userName={card['userName']}
                date={card['date']}
                country={card['country']}
                skills={card['skills']}
                type={card['type']}
                file={card['file']}
              />
            </div>
          ))
        ) : (
          <div className={styles['empty-message']} data-testid="empty-message">
            List is empty
          </div>
        )}
      </div>
    );
  }
}
