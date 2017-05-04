import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const labelStyle = { textTransform: 'none' };

export default class extends Component {

  onClick = () => {
    this.setState({ clicked: true })
  };

  render() {
    const { style, answer } = this.props;
    const { clicked } = this.state || {};

    if (!clicked) {
      return <RaisedButton style={style} labelStyle={labelStyle} label={answer.value} onClick={this.onClick} />;
    } else if (answer.correct) {
      return <RaisedButton style={style} labelStyle={labelStyle} label={'Genau!'} primary={true} />;
    } else {
      return <RaisedButton style={style} labelStyle={labelStyle} label={'Falsch'} secondary={true} />;
    }
  }
}