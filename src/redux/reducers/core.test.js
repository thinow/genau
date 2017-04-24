import reducer from './core';
import * as actions from '../actions/all';
import deepFreeze from 'deep-freeze';

const freeze = ({ previousState, action }) => ({
  previousState: deepFreeze(previousState),
  action: deepFreeze(action)
});

describe('Core Reducer', () => {

  it('Default State', () => expect(reducer()).toEqual({ loaded: false }));

  it('Unknown Action', () => expect(reducer('unchanged-state', { type: 'UNKNOWN' })).toEqual('unchanged-state'));

  it('Load App successfully', () => {
    const given = freeze({
      previousState: {
        loaded: false
      },
      action: {
        type: actions.APP_LOADING_SUCCESS
      }
    });

    expect(reducer(given.previousState, given.action)).toEqual({
      loaded: true
    });
  });

});
