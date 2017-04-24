import { call, put } from 'redux-saga/effects';
import * as saga from './core';
import api from '../api/api';
import * as actions from '../actions/all';

describe('Core Saga', () => {

  describe('Check availability of the API', () => {
    it('Status OK', () => {
      // when
      const generator = saga.checkAvailabilityOfTheAPI();

      // then
      expect(generator.next().value).toEqual(call(api, 'GET:/api/status'));

      const callResult = { response: 'Status is ok' };
      expect(generator.next(callResult).value).toEqual(put({ type: actions.APP_LOADING_SUCCESS }));

      expect(generator.next().value).toBeUndefined();
    });

    it('Cannot reach', () => {
      // when
      const generator = saga.checkAvailabilityOfTheAPI();

      // then
      expect(generator.next().value).toEqual(call(api, 'GET:/api/status'));

      const callResult = { error: 'Error' };
      expect(generator.next(callResult).value).toBeUndefined();
    });
  });

});
