import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
// eslint-disable-next-line
import * as RX from 'rxjs';

import './styles/index.css';

import store from './store/configureStore'



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
