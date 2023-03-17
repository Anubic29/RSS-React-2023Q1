import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../';

import styles from './MainLayout.module.scss';

function MainLayout() {
  return (
    <>
      <Header />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
