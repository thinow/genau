import reducer from './error';
import * as actions from '../actions/all';
import { reduce } from './testHelper';

describe('Core Reducer', () => {

  it('Default State', () => reduce(undefined).byUsing(reducer).expectedNextState({ displayed: false }));

  it('Unknown Action', () => reduce('state', { type: 'UNKNOWN' }).byUsing(reducer).expectedNextState('state'));

  it('Error has been occurred', () => {
    // given
    const previousState = {
      displayed: false
    };

    const action = {
      type: actions.ERROR_OCCURRED,
      error: 'Error'
    };

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState({
      displayed: true,
      error: 'Error'
    });
  });

  it('Error is hidden', () => {
    // given
    const previousState = {
      displayed: true,
      error: 'Error'
    };

    const action = {
      type: actions.ERROR_HIDDEN
    };

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState({
      displayed: false
    });
  });

});
