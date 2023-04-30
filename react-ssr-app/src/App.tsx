import React from 'react';
import Routing from './routing/Routing';
import { OverlayProvider } from './contexts';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['App']}>
      <OverlayProvider>
        <Routing />
      </OverlayProvider>
    </div>
  );
}

export default App;
