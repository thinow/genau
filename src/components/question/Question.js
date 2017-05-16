import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors/selectors';
import * as actions from '../../redux/actions/all';
import RaisedButton from 'material-ui/RaisedButton';
import Text from '../core/Text';
import Answer from './Answer';
import { palette } from '../theme/theme';

const style = {
  container: { textAlign: 'center' },
  label: { marginTop: '8vh', fontWeight: 'bold', fontSize: '10vw' },
  resolved: { color: palette.goodAnswer },
  translation: { margin: '2vh 0 6vh', color: palette.disabledColor, fontSize: '4vw' },
  answer: { display: 'block', margin: '3vh 12vw' },
  next: { position: 'fixed', bottom: '4vh', right: '2vw' }
};

const mapProps = (state) => ({
  question: selectors.getCurrentQuestion(state),
  correctAnswer: selectors.getCorrectAnswer(state)
});

const mapCallbacks = (dispatch) => ({
  onNextClick: () => dispatch(actions.NEXT_QUESTION.create())
});

const findLabelValue = (question, correctAnswer) => {
  return question.category === 'article' ? `${correctAnswer.value} ${question.label}` : correctAnswer.value;
};

const createLabel = (question, correctAnswer) => {
  if (question.resolved) {
    return <Text style={{ ...style.label, ...style.resolved }}>{findLabelValue(question, correctAnswer)}</Text>;
  } else {
    return <Text style={style.label}>{question.label}</Text>;
  }
};

const createButton = (answer) => (
  <Answer style={style.answer} key={answer.index} answer={answer} />
);

export default connect(mapProps, mapCallbacks)(({ question, correctAnswer, onNextClick }) => (
  <div style={style.container}>
    { createLabel(question, correctAnswer) }
    <Text style={style.translation}>{question.translation}</Text>
    { question.answers.map(createButton) }
    { question.resolved && <RaisedButton style={style.next} label="Weiter" primary={true} onClick={onNextClick} /> }
  </div>
));