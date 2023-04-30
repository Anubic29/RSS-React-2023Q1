import React from 'react';
import { FormCard } from '../';
import { FormCardType } from 'types/CardType';

import styles from './FormCardList.module.scss';

interface FormCardListProps {
  cards: FormCardType[];
}

function FormCardList(props: FormCardListProps) {
  return (
    <div className={styles['card-list']} data-testid="card-list">
      {props.cards.length > 0 ? (
        props.cards.map((card, idx) => (
          <div className={styles['card-block']} key={idx}>
            <FormCard
              id={idx + 1}
              userName={card['userName']}
              date={card['date']}
              country={card['country']}
              skills={card['skills']}
              language={card['language']}
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

export default FormCardList;
