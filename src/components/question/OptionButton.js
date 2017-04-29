import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class extends Component {

  onClick = () => {
    this.setState({ clicked: true })
  };

  render() {
    const { style, option } = this.props;
    const { clicked } = this.state || {};

    if (!clicked) {
      return <RaisedButton style={style} label={option.value} onClick={this.onClick} />
    } else if (option.correct) {
      return <RaisedButton style={style} label={'Genau!'} primary={true} />
    } else {
      return <RaisedButton style={style} label={'Falsch'} secondary={true} />
    }
  }
}