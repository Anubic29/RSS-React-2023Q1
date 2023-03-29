import React, { Component } from 'react';

import styles from './Input.module.scss';

interface InputProps {
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  type: 'text' | 'number' | 'date' | 'file';
  className?: string;
  isValid?: boolean;
  invalidMessage?: string;
}

export default class Input extends Component<InputProps> {
  render() {
    const classNames = this.props.className
      ? `${this.props.className} ${styles['input']}`
      : styles['input'];

    return (
      <div className={styles['input-block']}>
        <input
          className={
            this.props.isValid === false ? `${classNames} ${styles['input-invalid']}` : classNames
          }
          type={this.props.type}
          id={this.props.id}
          ref={this.props.inputRef}
          data-testid="input"
        />
        {this.props.isValid === false && this.props.invalidMessage && (
          <p className={styles['invalid-message']} data-testid="error-message">
            {this.props.invalidMessage}
          </p>
        )}
      </div>
    );
  }
}
