import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './Input.module.scss';

interface InputProps {
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  type: 'text' | 'number' | 'date' | 'file';
  className?: string;
  isValid?: boolean;
  invalidMessage?: string;
  register?: UseFormRegisterReturn;
}

function Input(props: InputProps) {
  const classNames = props.className ? `${props.className} ${styles['input']}` : styles['input'];

  return (
    <div className={styles['input-block']}>
      <input
        className={
          props.isValid === false ? `${classNames} ${styles['input-invalid']}` : classNames
        }
        type={props.type}
        id={props.id}
        ref={props.inputRef}
        data-testid="input"
        {...props.register}
      />
      {props.isValid === false && props.invalidMessage && (
        <p className={styles['invalid-message']} data-testid="error-message">
          {props.invalidMessage}
        </p>
      )}
    </div>
  );
}

export default Input;
