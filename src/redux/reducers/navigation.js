import * as actions from '../actions/all';

const createDefaultState = () => ([]);

export default (state = createDefaultState(), action = {}) => {
  switch (action.type) {

    case actions.DISPLAY_MENU.name:
    case actions.GET_QUESTION_REQUEST.name:
      return createDefaultState();

    case actions.GET_QUESTION_SUCCESS.name:
      return ['menu', 'about'];

    default:
      return state;
  }
};