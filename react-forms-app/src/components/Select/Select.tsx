import React, { Component, CSSProperties } from 'react';

import styles from './Select.module.scss';

interface SelectProps {
  id?: string;
  selectRef?: React.RefObject<HTMLSelectElement>;
  title: string;
  values: string[];
  className?: CSSProperties;
  isValid?: boolean;
  invalidMessage?: string;
}

export default class Select extends Component<SelectProps> {
  render() {
    const classNames = this.props.className
      ? `${this.props.className} ${styles['select']}`
      : styles['select'];

    return (
      <div className={styles['select-block']}>
        <select
          className={
            this.props.isValid === false ? `${classNames} ${styles['select-invalid']}` : classNames
          }
          id={this.props.id}
          ref={this.props.selectRef}
        >
          <option value="">Select {this.props.title}</option>
          {this.props.values.length > 0 &&
            this.props.values.map((value, idx) => (
              <option key={idx} value={value}>
                {value}
              </option>
            ))}
        </select>
        {this.props.isValid === false && this.props.invalidMessage && (
          <p className={styles['invalid-message']}>{this.props.invalidMessage}</p>
        )}
      </div>
    );
  }
}
