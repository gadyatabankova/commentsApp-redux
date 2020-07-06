import React from 'react';
import ReactDOM from 'react-dom';

import './css/addcomment.css';
import './css/historycomments.css';

import App from './containers/app';
import { createStore } from 'redux';
import items from './reducers';

const initialState = [];

const store = createStore(items, initialState);

ReactDOM.render(
  <App store={store} />,
  document.querySelector('#app')
);
