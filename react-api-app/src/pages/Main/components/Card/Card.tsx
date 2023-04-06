import React from 'react';

import styles from './Card.module.scss';

interface CardProps {
  title: string;
  image: string;
  genreList: string[];
  price: string;
}

function Card(props: CardProps) {
  return (
    <div className={styles['card']} data-testid="game-card">
      <div className={styles['image-container']}>
        <img src={props.image} alt={props.title} data-testid="game-card-image" />
      </div>
      <div className={styles['content']}>
        <h1 className={styles['title']} data-testid="game-card-title">
          {props.title}
        </h1>
        <div
          className={styles['genres']}
          title={props.genreList.join(', ')}
          data-testid="game-card-genres"
        >
          {props.genreList.join(', ')}
        </div>
        <div className={styles['price-block']}>
          <div className={styles['price']} data-testid="game-card-price">
            {props.price} $
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
