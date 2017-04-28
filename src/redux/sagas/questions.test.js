import { call, put, select } from 'redux-saga/effects';
import { createTestableIterator } from './testHelper';
import * as saga from './questions';
import api from '../api/api';
import * as actions from '../actions/all';
import * as selectors from '../selectors/selectors';

describe('Questions Saga', () => {

  describe('Get a question', () => {
    it('Success', () => {
      // given
      const action = { category: 'CATEGORY' };

      // when
      const iterator = createTestableIterator(saga.getQuestion(action));

      // then
      iterator.next({
        equals: call(api, 'GET:/api/question/CATEGORY'),
        returns: { response: { label: 'LABEL' } }
      });

      iterator.next({
        equals: put(actions.GET_QUESTION_SUCCESS.create({ label: 'LABEL' }))
      });

      iterator.hasNoMoreElements();
    });

    it('Failure', () => {
      // given
      const action = { category: 'CATEGORY' };

      // when
      const iterator = createTestableIterator(saga.getQuestion(action));

      // then
      iterator.next({
        equals: call(api, 'GET:/api/question/CATEGORY'),
        returns: { error: 'Error' }
      });

      iterator.next({
        equals: put(actions.ERROR_OCCURRED.create())
      });

      iterator.hasNoMoreElements();
    });
  });

  it('Next question', () => {
    // when
    const iterator = createTestableIterator(saga.nextQuestion());

    // then
    iterator.next({
      equals: select(selectors.getSelectedCategory),
      returns: 'CATEGORY'
    });

    iterator.next({
      equals: put(actions.GET_QUESTION_REQUEST.create('CATEGORY'))
    });

    iterator.hasNoMoreElements();
  });

});
