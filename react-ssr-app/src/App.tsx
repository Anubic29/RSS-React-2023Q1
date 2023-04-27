import React from 'react';
import Routing from './routing/Routing';
import { OverlayProvider } from './contexts';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['App']}>
      <OverlayProvider>
        <Provider store={setupStore()}>
          <Routing />
        </Provider>
      </OverlayProvider>
    </div>
  );
}

export default App;
