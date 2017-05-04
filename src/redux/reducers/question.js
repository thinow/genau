import * as actions from '../actions/all';
import { transformAnswers } from '../common/common';

const createDefaultState = () => ({});

const sort = ({ category, answers }) => transformAnswers(category, answers);

export default (state = createDefaultState(), action = {}) => {
  switch (action.type) {

    case actions.GET_QUESTION_SUCCESS.name:
      return {
        ...action.question,
        answers: sort(action.question)
      };

    default:
      return state;
  }
};