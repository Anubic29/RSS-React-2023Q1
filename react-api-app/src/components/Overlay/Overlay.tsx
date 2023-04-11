import React from 'react';
import { MdClose } from 'react-icons/md';

import styles from './Overlay.module.scss';

interface OverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Overlay(props: OverlayProps) {
  return (
    <div className={styles['overlay']} data-testid="overlay">
      <div
        className={styles['overlay__back']}
        data-testid="overlay-back"
        onClick={props.onClose}
      ></div>
      <div className={styles['overlay__modal']}>
        <div className={styles['btn-block']}>
          <MdClose
            className={styles['btn-close']}
            onClick={props.onClose}
            data-testid="overlay-close"
          />
        </div>
        <div className={styles['content']}>{props.children}</div>
      </div>
    </div>
  );
}

export default Overlay;
