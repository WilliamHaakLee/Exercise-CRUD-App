import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import ReactDOM from 'react-dom/client';
import styles from './styles.css';
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Provider store = {store}>
  <div><App /></div>
</Provider>,
);