import reducer from './navigation';
import * as actions from '../actions/all';
import { reduce } from './testHelper';

describe('Navigation Reducer', () => {

  it('Default State', () => reduce(undefined).byUsing(reducer).expectedNextState([]));

  it('Unknown Action', () => reduce('state', { type: 'UNKNOWN' }).byUsing(reducer).expectedNextState('state'));

  describe('Empty list', () => {

    const actionsWhichEmptyTheList = [
      { description: 'When display menu', action: actions.DISPLAY_MENU.create() },
      { description: 'When request new question', action: actions.GET_QUESTION_REQUEST.create() }
    ];

    actionsWhichEmptyTheList.forEach(({ description, action }) => {
      it(description, () => {
        // given
        const previousState = ['anything'];

        // when / then
        reduce(previousState, action).byUsing(reducer).expectedNextState([]);
      });
    });
  });

  it('When display a question', () => {
    // given
    const previousState = ['anything'];

    const action = actions.GET_QUESTION_SUCCESS.create();

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState([
      'menu', 'about'
    ]);
  });

});
