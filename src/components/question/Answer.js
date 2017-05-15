import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { palette } from '../theme/theme';
import * as actions from '../../redux/actions/all';
import * as selectors from '../../redux/selectors/selectors';

const labelStyle = {
  textTransform: 'none',
  color: palette.alternateTextColor
};

const mapProps = (state, ownProps) => ownProps;

const mapCallbacks = (dispath) => ({
  onClick: answer => dispath(actions.CHOOSE_ANSWER.create(answer))
});

export default connect(mapProps, mapCallbacks)(class extends Component {

  createButton = (buttonProps) => {
    const { style } = this.props;
    return React.createElement(RaisedButton, { style, labelStyle, ...buttonProps });
  };

  render() {
    const { answer, onClick } = this.props;

    if (!answer.chosen) {
      return this.createButton({ label: answer.value, primary: true, onClick: () => onClick(answer) });
    } else if (answer.correct) {
      return this.createButton({ label: 'Genau!', backgroundColor: palette.goodAnswer });
    } else {
      return this.createButton({ label: 'Falsch', labelStyle: { ...labelStyle, color: palette.accent1Color } });
    }
  }
});