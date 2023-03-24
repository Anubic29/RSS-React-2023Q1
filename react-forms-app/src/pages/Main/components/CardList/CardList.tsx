import React, { Component } from 'react';
import { CardType } from '../../../../types/CardType';
import { Card } from '../';

import styles from './CardList.module.scss';

interface CardListProps {
  cards: CardType[];
}

export default class CardList extends Component<CardListProps> {
  render() {
    return (
      <div className={styles['card-list']} data-testid="card-list">
        {this.props.cards.length > 0 ? (
          this.props.cards.map((card, idx) => (
            <div className={styles['card-block']} key={idx}>
              <Card
                title={card.title}
                image={card.image}
                genreList={card.genreList}
                price={`${card.price}`}
              />
            </div>
          ))
        ) : (
          <h1 data-testid="card-list-empty-message">List is empty</h1>
        )}
      </div>
    );
  }
}
