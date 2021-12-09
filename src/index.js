import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import { ClothesApp } from './ClothesApp';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <ClothesApp />
  </Provider>,
  document.getElementById('root')
);

