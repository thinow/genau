import { takeEvery, call, put, select, fork } from 'redux-saga/effects';
import * as actions from '../actions/all';
import * as selectors from '../selectors/selectors';
import api from '../api/api';

export function* getQuestion({ category }) {
  const { response } = yield call(api, `GET:/api/question/${category}`);

  if (response) {
    yield put(actions.GET_QUESTION_SUCCESS.create(response));
  } else {
    yield put(actions.ERROR_OCCURRED.create());
  }
}

export function* nextQuestion() {
  const category = yield select(selectors.getSelectedCategory);

  yield put(actions.GET_QUESTION_REQUEST.create(category));
}

export function* listenGetQuestionRequest() {
  yield takeEvery(actions.GET_QUESTION_REQUEST.name, getQuestion);
}

export function* listenNextQuestion() {
  yield takeEvery(actions.NEXT_QUESTION.name, nextQuestion);
}

export default function* rootSaga() {
  yield [
    fork(listenGetQuestionRequest),
    fork(listenNextQuestion)
  ];
}
