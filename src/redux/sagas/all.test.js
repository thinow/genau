import { fork } from 'redux-saga/effects';
import createAllSagas from './all';
import core from './core';

it('Sagas (all.js)', () => {
  // when
  const sagas = createAllSagas();

  // then
  expect(sagas.next().value).toEqual([
    fork(core)
  ]);
});
