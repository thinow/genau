import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers/all';
import sagas from './redux/sagas/all';
import App from './components/App';

const saga = createSagaMiddleware();
const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(saga, logger)
);

saga.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
