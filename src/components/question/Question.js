import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors/selectors';
import RaisedButton from 'material-ui/RaisedButton';
import Text from '../core/Text';

const style = {
  container: {}
};

const mapProps = (state) => ({
  question: selectors.getCurrentQuestion(state)
});

const mapCallbacks = (dispatch) => ({});

export default connect(mapProps, mapCallbacks)(({ question }) => (
  <div style={style.container}>
    <Text>{question.label}</Text>
    {question.options.map(({ value }) => <RaisedButton key={value} label={value} />)}
  </div>
));