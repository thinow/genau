import reducer from './core';
import * as actions from '../actions/all';
import { reduce } from './testHelper';

describe('Core Reducer', () => {

  it('Default State', () => reduce(undefined).byUsing(reducer).expectedNextState({ loaded: false }));

  it('Unknown Action', () => reduce('state', { type: 'UNKNOWN' }).byUsing(reducer).expectedNextState('state'));

  it('Load App successfully', () => {
    // given
    const previousState = {
      loaded: false
    };

    const action = {
      type: actions.APP_LOADING_SUCCESS
    };

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState({
      loaded: true
    });
  });

});
