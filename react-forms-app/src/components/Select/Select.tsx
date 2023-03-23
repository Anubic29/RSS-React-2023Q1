import React, { Component, CSSProperties } from 'react';

import styles from './Select.module.scss';

interface SelectProps {
  id?: string;
  selectRef?: React.RefObject<HTMLSelectElement>;
  title: string;
  values: string[];
  className?: CSSProperties;
}

export default class Select extends Component<SelectProps> {
  render() {
    const classNames = this.props.className
      ? `${this.props.className} ${styles['select']}`
      : styles['select'];

    return (
      <select className={classNames} id={this.props.id} ref={this.props.selectRef}>
        <option value="">Select {this.props.title}</option>
        {this.props.values.length > 0 &&
          this.props.values.map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
      </select>
    );
  }
}
