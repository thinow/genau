import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors/selectors';
import RaisedButton from 'material-ui/RaisedButton';
import Text from '../core/Text';
import { palette } from '../theme/theme';

const style = {
  container: { textAlign: 'center' },
  label: { marginTop: '16vh', fontWeight: 'bold', fontSize: '10vw' },
  translation: { margin: '5vh 0', color: palette.disabledColor, fontSize: '4vw' },
  button: { display: 'block', margin: '3vh 12vw' }
};

const mapProps = (state) => ({
  question: selectors.getCurrentQuestion(state)
});

const mapCallbacks = (dispatch) => ({});

const createButton = ({ value }) => (
  <RaisedButton key={value} label={value} style={style.button} />
);

export default connect(mapProps, mapCallbacks)(({ question }) => (
  <div style={style.container}>
    <Text style={style.label}>{question.label}</Text>
    <Text style={style.translation}>{question.translation}</Text>
    {question.options.map(createButton)}
  </div>
));