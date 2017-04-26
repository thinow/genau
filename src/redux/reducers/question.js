import * as actions from '../actions/all';

const createDefaultState = () => ({});

export default (state = createDefaultState(), action = {}) => {
  switch (action.type) {

    case actions.GET_QUESTION_SUCCESS.name:
      return action.question;

    default:
      return state;
  }
};