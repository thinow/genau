import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { palette } from '../theme/theme';

const labelStyle = {
  textTransform: 'none',
  color: palette.alternateTextColor
};

const mapProps = (state, ownProps) => ownProps;

const mapCallbacks = () => ({});

export default connect(mapProps, mapCallbacks)(class extends Component {

  onClick = () => {
    this.setState({ clicked: true })
  };

  createButton = (buttonProps) => {
    const { style } = this.props;
    return React.createElement(RaisedButton, { style, labelStyle, ...buttonProps });
  };

  render() {
    const { answer } = this.props;
    const { clicked } = this.state || {};

    if (!clicked) {
      return this.createButton({ label: answer.value, primary: true, onClick: this.onClick });
    } else if (answer.correct) {
      return this.createButton({ label: 'Genau!', backgroundColor: palette.goodAnswer });
    } else {
      return this.createButton({ label: 'Falsch', labelStyle: { ...labelStyle, color: palette.accent1Color } });
    }
  }
});