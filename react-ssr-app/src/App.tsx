import React, { useEffect, useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import Routing from './routing/Routing';
import { OverlayProvider } from './contexts';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';

import styles from './App.module.scss';

function App() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

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
