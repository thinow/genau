import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/all';
import api from '../api/api';

export function* getQuestion({ category }) {
  const { response } = yield call(api, `GET:/api/question/${category}`);

  if (response) {
    yield put(actions.GET_QUESTION_SUCCESS.create(response));
  } else {
    yield put(actions.ERROR_OCCURRED.create());
  }
}

export function* listenGetQuestionRequest() {
  yield takeEvery(actions.GET_QUESTION_REQUEST.name, getQuestion);
}

export default function* rootSaga() {
  yield [
    fork(listenGetQuestionRequest)
  ];
}
