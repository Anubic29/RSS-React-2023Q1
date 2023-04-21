import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.hydrate(
  <Provider store={setupStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
