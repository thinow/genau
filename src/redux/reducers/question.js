import * as actions from '../actions/all';
import { transformAnswers } from '../common/common';

const createDefaultState = () => ({});

const sort = ({ category, answers }) => transformAnswers(category, answers);

const flagAnswersAsChosen = (answers, chosenAnswer) => {
  if (chosenAnswer.correct) {
    return answers.map(answer => ({ ...answer, chosen: true }));
  } else {
    return answers.map(answer => {
      return answer.index === chosenAnswer.index ? { ...answer, chosen: true } : answer;
    });
  }
};

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
        answers: flagAnswersAsChosen(state.answers, action.answer),
        resolved: action.answer.correct
      };

    default:
      return state;
  }
};