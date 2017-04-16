import { takeEvery, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/all';

export function* putFakeAction() {
  yield put({ type: 'SAGA_IS_WORKING' });
}

export function* listenAppLoadingSuccess() {
  yield takeEvery(actions.APP_LOADING_SUCCESS, putFakeAction);
}

export default function* rootSaga() {
  yield [
    fork(listenAppLoadingSuccess)
  ];
}
