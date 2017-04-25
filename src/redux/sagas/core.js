import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/all';
import api from '../api/api';

export function* checkAvailabilityOfTheAPI() {
  const { response, error } = yield call(api, 'GET:/api/status');

  if (response)
    yield put({ type: actions.APP_LOADING_SUCCESS });
  else
    yield put({ type: actions.ERROR_OCCURRED, error });
}

export function* listenAppLoadingRequest() {
  yield takeEvery(actions.APP_LOADING_REQUEST, checkAvailabilityOfTheAPI);
}

export default function* rootSaga() {
  yield [
    fork(listenAppLoadingRequest)
  ];
}
