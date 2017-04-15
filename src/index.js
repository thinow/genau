import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './redux/reducers/all';
import App from './component/App';
import './index.css';

const store = createStore(
  reducers,
  applyMiddleware(createLogger())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
