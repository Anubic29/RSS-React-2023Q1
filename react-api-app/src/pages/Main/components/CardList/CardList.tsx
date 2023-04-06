import React from 'react';
import { CharacterType } from 'types/CharacterType';
import { Card } from '../';

import styles from './CardList.module.scss';

interface CardListProps {
  cards: CharacterType[];
}

function CardList(props: CardListProps) {
  return (
    <div className={styles['card-list']} data-testid="card-list">
      {props.cards.length > 0 ? (
        props.cards.map((card, idx) => (
          <div className={styles['card-block']} key={idx}>
            <Card data={card} />
          </div>
        ))
      ) : (
        <h1 data-testid="card-list-empty-message">List is empty</h1>
      )}
    </div>
  );
}

export default CardList;
