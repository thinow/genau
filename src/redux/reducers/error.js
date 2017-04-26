import * as type from '../actions/all';

const createDefaultState = ()=> ({ displayed: false });

export default (state = createDefaultState(), action = {}) => {
  switch (action.type) {

    case type.ERROR_OCCURRED.name:
      return { displayed: true };

    case type.ERROR_HIDDEN.name:
      return createDefaultState();

    default:
      return state;
  }
};