import * as actions from '../actions/all';

const createDefaultState = ()=> ({ displayed: false });

export default (state = createDefaultState(), action = {}) => {
  switch (action.type) {

    case actions.ERROR_OCCURRED.name:
      return { displayed: true };

    case actions.ERROR_HIDDEN.name:
      return createDefaultState();

    default:
      return state;
  }
};