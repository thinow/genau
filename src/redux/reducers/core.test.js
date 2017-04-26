import reducer from './core';
import * as actions from '../actions/all';
import { reduce } from './testHelper';

describe('Core Reducer', () => {

  it('Default State', () => reduce(undefined).byUsing(reducer).expectedNextState({ page: 'loading' }));

  it('Unknown Action', () => reduce('state', { type: 'UNKNOWN' }).byUsing(reducer).expectedNextState('state'));

  describe('App loading', () => {
    it('When App is loaded, should display the menu', () => {
      // given
      const previousState = { page: 'loading' };

      const action = actions.APP_LOADING_SUCCESS.create();

      // when / then
      reduce(previousState, action).byUsing(reducer).expectedNextState({
        page: 'menu'
      });
    });
  });

  describe('Get Question', () => {
    it('When request for a question, should display the loading', () => {
      // given
      const previousState = { page: 'any' };

      const action = actions.GET_QUESTION_REQUEST.create();

      // when / then
      reduce(previousState, action).byUsing(reducer).expectedNextState({
        page: 'loading'
      });
    });

    it('When question is received, should display the question', () => {
      // given
      const previousState = { page: 'any' };

      const action = actions.GET_QUESTION_SUCCESS.create();

      // when / then
      reduce(previousState, action).byUsing(reducer).expectedNextState({
        page: 'question'
      });
    });
  });

})
;
