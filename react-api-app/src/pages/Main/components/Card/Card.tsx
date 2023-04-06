import React from 'react';
import { CharacterType } from 'types/CharacterType';

import styles from './Card.module.scss';

interface CardProps {
  data: CharacterType;
}

function Card(props: CardProps) {
  const { data } = props;

  return (
    <div className={styles['card']} data-testid="character-card">
      <div className={styles['image-container']}>
        <img src={data.image} alt={data.name} data-testid="character-card-image" />
      </div>
      <div className={styles['content']}>
        <h1 className={styles['name']} data-testid="character-card-name">
          {data.name}
        </h1>
        <div className={styles['btn-block']}>
          <button className={styles['btn']}>
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
