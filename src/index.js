import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers/all';
import sagas from './redux/sagas/all';
import App from './components/App';

const DEBUG = process.env.NODE_ENV !== 'production';

const saga = createSagaMiddleware();
const middleware = DEBUG ? applyMiddleware(saga, createLogger()) : applyMiddleware(saga);

const store = createStore(
  reducers,
  middleware
);

saga.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
