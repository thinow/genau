import * as actions from '../actions/all';
import { sortOptions } from '../common/common';

const createDefaultState = () => ({});

const sort = ({ category, options }) => sortOptions(category, options);

export default (state = createDefaultState(), action = {}) => {
  switch (action.type) {

    case actions.GET_QUESTION_SUCCESS.name:
      return {
        ...action.question,
        options: sort(action.question)
      };

    default:
      return state;
  }
};