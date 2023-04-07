import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing/Routing';
import { OverlayProvider } from './contexts';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['App']}>
      <OverlayProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </OverlayProvider>
    </div>
  );
}

export default App;
