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
    <div className={styles['card']}>
      <div className={styles['image-container']}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles['content']}>
        <h1 className={styles['title']}>{props.title}</h1>
        <div className={styles['genres']} title={props.genreList.join(', ')}>
          {props.genreList.join(', ')}
        </div>
        <div className={styles['price-block']}>
          <div className={styles['price']}>{props.price} $</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
