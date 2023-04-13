import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
