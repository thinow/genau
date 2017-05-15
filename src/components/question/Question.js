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
  translation: { margin: '2vh 0 6vh', color: palette.disabledColor, fontSize: '4vw' },
  answer: { display: 'block', margin: '3vh 12vw' },
  next: { position: 'fixed', bottom: '4vh', right: '2vw' }
};

const mapProps = (state) => ({
  question: selectors.getCurrentQuestion(state),
  goodAnswer: selectors.didUserGiveTheGoodAnswer(state)
});

const mapCallbacks = (dispatch) => ({
  onNextClick: () => dispatch(actions.NEXT_QUESTION.create())
});

const createButton = (answer) => (
  <Answer style={style.answer} key={answer.value} answer={answer} />
);

export default connect(mapProps, mapCallbacks)(({ question, goodAnswer, onNextClick }) => (
  <div style={style.container}>
    <Text style={style.label}>{question.label}</Text>
    <Text style={style.translation}>{question.translation}</Text>
    {question.answers.map(createButton)}
    { goodAnswer && <RaisedButton style={style.next} label="Weiter" primary={true} onClick={onNextClick} /> }
  </div>
));