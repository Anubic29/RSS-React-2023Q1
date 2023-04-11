import React from 'react';

import styles from './Preloader.module.scss';

const PRELOADER_HEIGHT = {
  withText: '45px',
  withoutText: '25px',
};

interface PreloaderProps {
  text?: string;
  invert?: boolean;
}

function Preloader(props: PreloaderProps) {
  return (
    <div
      className={props.invert ? `${styles['preloader']} ${styles['invert']}` : styles['preloader']}
      style={{ height: props.text ? PRELOADER_HEIGHT.withText : PRELOADER_HEIGHT.withoutText }}
      data-testid="preloader"
    >
      <span className={styles['preloader-icon']} />
      {props.text && (
        <span className={styles['preloader-text']} data-testid="preloader-text">
          {props.text}
        </span>
      )}
    </div>
  );
}

export default Preloader;
