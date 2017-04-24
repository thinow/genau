import * as type from '../actions/all';

const createDefaultState = ()=> ({ loaded: false });

export default (state = createDefaultState(), action = {}) => {
  switch (action.type) {

    case type.APP_LOADING_SUCCESS:
      return { loaded: true };

    default:
      return state;
  }
};