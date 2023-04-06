import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../';

import styles from './MainLayout.module.scss';

function MainLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <Header activeRoute={pathname} />
      <div className={styles['content']} data-testid="content">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
