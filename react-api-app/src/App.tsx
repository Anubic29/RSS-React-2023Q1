import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing/Routing';
import api from './api';

import styles from './App.module.scss';

function App() {
  useEffect(() => {
    (async () => {
      const response = await api.character.getDataAll();
      console.log(response);
    })();
  }, []);

  return (
    <div className={styles['App']}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
