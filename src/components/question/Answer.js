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

const mapProps = (state, ownProps) => ({
  ...ownProps,
  userGaveTheGoodAnswer: selectors.didUserGiveTheGoodAnswer(state)
});

const mapCallbacks = (dispath) => ({
  notifyChoice: answer => dispath(actions.CHOOSE_ANSWER.create(answer.correct))
});

export default connect(mapProps, mapCallbacks)(class extends Component {

  onClick = () => {
    const { answer, notifyChoice } = this.props;

    this.setState({ clicked: true });
    notifyChoice(answer)
  };

  createButton = (buttonProps) => {
    const { style } = this.props;
    return React.createElement(RaisedButton, { style, labelStyle, ...buttonProps });
  };

  render() {
    const { answer, userGaveTheGoodAnswer } = this.props;
    const { clicked } = this.state || {};

    if (userGaveTheGoodAnswer) {
      if (answer.correct) {
        return this.createButton({ label: 'Genau!', backgroundColor: palette.goodAnswer });
      } else {
        return this.createButton({ label: 'Falsch', labelStyle: { ...labelStyle, color: palette.accent1Color } });
      }
    } else if (!clicked) {
      return this.createButton({ label: answer.value, primary: true, onClick: this.onClick });
    } else {
      return this.createButton({ label: 'Falsch', labelStyle: { ...labelStyle, color: palette.accent1Color } });
    }
  }
});