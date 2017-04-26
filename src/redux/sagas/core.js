import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/all';
import api from '../api/api';

export function* checkAvailabilityOfTheAPI() {
  const { response } = yield call(api, 'GET:/api/status');

  if (response)
    yield put(actions.APP_LOADING_SUCCESS.create());
  else
    yield put(actions.ERROR_OCCURRED.create());
}

export function* listenAppLoadingRequest() {
  yield takeEvery(actions.APP_LOADING_REQUEST.name, checkAvailabilityOfTheAPI);
}

export default function* rootSaga() {
  yield [
    fork(listenAppLoadingRequest)
  ];
}
