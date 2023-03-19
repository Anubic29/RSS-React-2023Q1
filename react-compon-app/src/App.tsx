import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing/Routing';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['App']}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
