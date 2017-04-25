import * as type from '../actions/all';

const createDefaultState = ()=> ({ displayed: false });

export default (state = createDefaultState(), action = {}) => {
  switch (action.type) {

    case type.ERROR_OCCURRED:
      return { displayed: true, error: action.error };

    case type.ERROR_HIDDEN:
      return createDefaultState();

    default:
      return state;
  }
};