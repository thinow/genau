import { fork } from 'redux-saga/effects';
import core from './core';
import questions from './questions';

export default function* rootSaga() {
  yield [
    fork(core),
    fork(questions)
  ];
}
