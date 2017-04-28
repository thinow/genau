import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors/selectors';
import * as actions from '../../redux/actions/all';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Text from '../core/Text';
import { palette } from '../theme/theme';

const style = {
  container: { textAlign: 'center' },
  label: { marginTop: '16vh', fontWeight: 'bold', fontSize: '10vw' },
  translation: { margin: '5vh 0', color: palette.disabledColor, fontSize: '4vw' },
  button: { display: 'block', margin: '3vh 12vw' },
  next: { position: 'fixed', bottom: '4vh', right: '2vw' }
};

const mapProps = (state) => ({
  question: selectors.getCurrentQuestion(state)
});

const mapCallbacks = (dispatch) => ({
  onNextClick: () => dispatch(actions.GET_QUESTION_REQUEST.create())
});

const createButton = ({ value }) => (
  <RaisedButton style={style.button} key={value} label={value} />
);

export default connect(mapProps, mapCallbacks)(({ question, onNextClick }) => (
  <div style={style.container}>
    <Text style={style.label}>{question.label}</Text>
    <Text style={style.translation}>{question.translation}</Text>
    {question.options.map(createButton)}
    <FlatButton style={style.next} label="Weiter" primary={true} onClick={onNextClick} />
  </div>
));