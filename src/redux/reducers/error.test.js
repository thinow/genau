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

    const action = actions.ERROR_OCCURRED.create();

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState({
      displayed: true
    });
  });

  it('Error is hidden', () => {
    // given
    const previousState = {
      displayed: true
    };

    const action = actions.ERROR_HIDDEN.create();

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState({
      displayed: false
    });
  });

});
