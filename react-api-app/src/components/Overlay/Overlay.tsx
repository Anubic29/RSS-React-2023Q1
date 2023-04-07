import React from 'react';
import { MdClose } from 'react-icons/md';

import styles from './Overlay.module.scss';

interface OverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Overlay(props: OverlayProps) {
  return (
    <div className={styles['overlay']}>
      <div className={styles['overlay__back']} onClick={props.onClose}></div>
      <div className={styles['overlay__modal']}>
        <div className={styles['btn-block']}>
          <MdClose className={styles['btn-close']} onClick={props.onClose} />
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Overlay;
