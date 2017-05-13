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

    case actions.CHOOSE_ANSWER.name:
      return {
        ...state,
        goodAnswer: action.correct
      };

    default:
      return state;
  }
};