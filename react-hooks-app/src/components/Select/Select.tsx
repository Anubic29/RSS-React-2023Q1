import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './Select.module.scss';

interface SelectProps {
  id?: string;
  selectRef?: React.RefObject<HTMLSelectElement>;
  title: string;
  values: string[];
  className?: string;
  isValid?: boolean;
  invalidMessage?: string;
  register?: UseFormRegisterReturn;
}

function Select(props: SelectProps) {
  const classNames = props.className ? `${props.className} ${styles['select']}` : styles['select'];

  return (
    <div className={styles['select-block']}>
      <select
        className={
          props.isValid === false ? `${classNames} ${styles['select-invalid']}` : classNames
        }
        id={props.id}
        ref={props.selectRef}
        data-testid="select"
        {...props.register}
      >
        <option value="">Select {props.title}</option>
        {props.values.length > 0 &&
          props.values.map((value, idx) => (
            <option key={idx} value={value} data-testid="select-option">
              {value}
            </option>
          ))}
      </select>
      {props.isValid === false && props.invalidMessage && (
        <p className={styles['invalid-message']} data-testid="error-message">
          {props.invalidMessage}
        </p>
      )}
    </div>
  );
}

export default Select;
