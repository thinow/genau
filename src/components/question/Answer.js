import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { palette } from '../theme/theme';
import * as actions from '../../redux/actions/all';

const labelStyle = {
  textTransform: 'none',
  color: palette.alternateTextColor
};

const mapProps = (state, ownProps) => ownProps;

const mapCallbacks = (dispath) => ({
  onClick: answer => dispath(actions.CHOOSE_ANSWER.create(answer))
});

const create = (buttonProps) => {
  return React.createElement(RaisedButton, { labelStyle, ...buttonProps });
};

export default connect(mapProps, mapCallbacks)(({ answer, style, onClick }) => {
  if (!answer.chosen) {
    return create({ label: answer.value, style, primary: true, onClick: () => onClick(answer) });
  } else if (answer.correct) {
    return create({ label: 'Genau!', style, backgroundColor: palette.goodAnswer });
  } else {
    return create({ label: 'Falsch', style, labelStyle: { ...labelStyle, color: palette.accent1Color } });
  }
});