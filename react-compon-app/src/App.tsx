import React from 'react';
import Routing from './routing/Routing';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['App']}>
      <Routing />
    </div>
  );
}

export default App;
