import * as actions from '../actions/all';

const createDefaultState = ()=> ({ page: 'loading' });

export default (state = createDefaultState(), action = {}) => {
  switch (action.type) {

    case actions.APP_LOADING_SUCCESS.name:
    case actions.DISPLAY_MENU.name:
      return { page: 'menu' };

    case actions.GET_QUESTION_REQUEST.name:
      return { page: 'loading', selectedCategory: action.category };

    case actions.GET_QUESTION_SUCCESS.name:
      return { ...state, page: 'question' };

    default:
      return state;
  }
};