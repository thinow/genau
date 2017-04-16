import { fork } from 'redux-saga/effects';
import core from './core';

export default function* rootSaga() {
  yield [
    fork(core)
  ];
}
