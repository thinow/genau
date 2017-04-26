import reducer from './question';
import * as actions from '../actions/all';
import { reduce } from './testHelper';

describe('Question Reducer', () => {

  it('Default State', () => reduce(undefined).byUsing(reducer).expectedNextState({}));

  it('Unknown Action', () => reduce('state', { type: 'UNKNOWN' }).byUsing(reducer).expectedNextState('state'));

  it('When question is received, should fill the state', () => {
    // given
    const previousState = {};

    const action = actions.GET_QUESTION_SUCCESS.create({ label: 'QUESTION' });

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState({
      label: 'QUESTION'
    });
  });

});
