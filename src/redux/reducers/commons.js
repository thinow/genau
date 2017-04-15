import * as type from '../actions/all';

export default (state = {}, action = {}) => {
  switch (action.type) {
    
    case type.APP_LOADING_SUCCESS:
      return { loaded: true };
    
    default:
      return state;
  }
};