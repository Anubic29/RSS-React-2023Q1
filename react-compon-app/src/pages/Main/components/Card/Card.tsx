import React, { Component } from 'react';

import styles from './Card.module.scss';

interface CardProps {
  title: string;
  image: string;
  genreList: string[];
  price: string;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <div className={styles['card']}>
        <div className={styles['image-container']}>
          <img src={this.props.image} alt="" />
        </div>
        <div className={styles['content']}>
          <h1 className={styles['title']}>{this.props.title}</h1>
          <div className={styles['genres']} title={this.props.genreList.join(', ')}>
            {this.props.genreList.join(', ')}
          </div>
          <div className={styles['price-block']}>
            <div className={styles['price']}>{this.props.price} $</div>
          </div>
        </div>
      </div>
    );
  }
}
