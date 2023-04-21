import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../';
import { useOverlay } from '../../contexts';
import { Overlay } from '../../components';

import styles from './MainLayout.module.scss';

function MainLayout() {
  const { pathname } = useLocation();
  const { isVisible, setIsVisible, contentOverlay, setContentOverlay } = useOverlay();

  return (
    <>
      <Header activeRoute={pathname} />
      <div className={styles['content']} data-testid="content">
        <Outlet />
      </div>
      {isVisible && (
        <Overlay
          onClose={() => {
            setIsVisible(false);
            setContentOverlay(null);
          }}
        >
          {contentOverlay}
        </Overlay>
      )}
    </>
  );
}

export default MainLayout;
