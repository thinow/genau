import { call, put } from 'redux-saga/effects';
import { createTestableIterator } from './testHelper';
import * as saga from './core';
import api from '../api/api';
import * as actions from '../actions/all';

describe('Core Saga', () => {

  describe('Check availability of the API', () => {
    it('Status OK', () => {
      // when
      const iterator = createTestableIterator(saga.checkAvailabilityOfTheAPI());

      // then
      iterator.next({
        equals: call(api, 'GET:/api/status'),
        returns: { response: 'Status is ok' }
      });

      iterator.next({
        equals: put(actions.APP_LOADING_SUCCESS.create())
      });

      iterator.hasNoMoreElements();
    });

    it('Cannot reach API', () => {
      // when
      const iterator = createTestableIterator(saga.checkAvailabilityOfTheAPI());

      // then
      iterator.next({
        equals: call(api, 'GET:/api/status'),
        returns: { error: 'Error' }
      });

      iterator.next({
        equals: put(actions.ERROR_OCCURRED.create())
      });

      iterator.hasNoMoreElements();
    });
  });

});
