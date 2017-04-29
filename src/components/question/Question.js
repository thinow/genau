import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors/selectors';
import * as actions from '../../redux/actions/all';
import FlatButton from 'material-ui/FlatButton';
import Text from '../core/Text';
import OptionButton from './OptionButton';
import { palette } from '../theme/theme';

const style = {
  container: { textAlign: 'center' },
  label: { marginTop: '8vh', fontWeight: 'bold', fontSize: '10vw' },
  translation: { margin: '2vh 0 10vh', color: palette.disabledColor, fontSize: '4vw' },
  option: { display: 'block', margin: '3vh 12vw' },
  next: { position: 'fixed', bottom: '4vh', right: '2vw' }
};

const mapProps = (state) => ({
  question: selectors.getCurrentQuestion(state)
});

const mapCallbacks = (dispatch) => ({
  onNextClick: () => dispatch(actions.NEXT_QUESTION.create())
});

const createButton = (option) => (
  <OptionButton style={style.option} key={option.value} option={option} />
);

export default connect(mapProps, mapCallbacks)(({ question, onNextClick }) => (
  <div style={style.container}>
    <Text style={style.label}>{question.label}</Text>
    <Text style={style.translation}>{question.translation}</Text>
    {question.options.map(createButton)}
    <FlatButton style={style.next} label="Weiter" primary={true} onClick={onNextClick} />
  </div>
));