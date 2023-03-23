import React, { Component, CSSProperties } from 'react';

import styles from './Input.module.scss';

interface InputProps {
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  type: 'text' | 'number' | 'date' | 'file';
  className?: CSSProperties;
}

export default class Input extends Component<InputProps> {
  render() {
    const classNames = this.props.className
      ? `${this.props.className} ${styles['input']}`
      : styles['input'];

    return (
      <div className={styles['input-block']}>
        <input
          className={classNames}
          type={this.props.type}
          id={this.props.id}
          ref={this.props.inputRef}
        />
      </div>
    );
  }
}
