import reducer from './question';
import * as actions from '../actions/all';
import { reduce } from './testHelper';
import * as common from '../common/common';

const CORRECT = true;

describe('Question Reducer', () => {

  it('Default State', () => reduce(undefined).byUsing(reducer).expectedNextState({}));

  it('Unknown Action', () => reduce('state', { type: 'UNKNOWN' }).byUsing(reducer).expectedNextState('state'));

  it('When question is received, should fill the state', () => {
    // given
    const previousState = {};

    const action = actions.GET_QUESTION_SUCCESS.create({
      label: 'QUESTION', category: 'CATEGORY', answers: 'ORIGINAL-ANSWERS'
    });

    //noinspection JSAnnotator
    common.transformAnswers = jest.fn(() => 'TRANSFORMED-ANSWERS');

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState({
      label: 'QUESTION', category: 'CATEGORY', answers: 'TRANSFORMED-ANSWERS'
    });

    expect(common.transformAnswers).toBeCalledWith('CATEGORY', 'ORIGINAL-ANSWERS')
  });

  it('When an answer has been chosen, flag as chosen', () => {
    // given
    const previousState = {
      label: 'QUESTION', answers: [
        { index: 0, value: 'first-answer' },
        { index: 1, value: 'second-answer' }
      ]
    };

    const action = actions.CHOOSE_ANSWER.create({ index: 1, value: 'second-answer' });

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState({
      label: 'QUESTION', answers: [
        { index: 0, value: 'first-answer' },
        { index: 1, value: 'second-answer', chosen: true }
      ]
    });
  });

  it('When the good answer has been chosen, flag every answers as chosen', () => {
    // given
    const previousState = {
      label: 'QUESTION', answers: [
        { index: 0, value: 'first-answer' },
        { index: 1, value: 'second-answer', correct: true }
      ]
    };

    const action = actions.CHOOSE_ANSWER.create({ index: 1, value: 'second-answer', correct: true });

    // when / then
    reduce(previousState, action).byUsing(reducer).expectedNextState({
      label: 'QUESTION', answers: [
        { index: 0, value: 'first-answer', chosen: true },
        { index: 1, value: 'second-answer', correct: true, chosen: true }
      ]
    });
  });

});
