import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class extends Component {

  onClick = () => {
    this.setState({ clicked: true })
  };

  render() {
    const { style, option } = this.props;
    const { clicked } = this.state || {};

    const label = clicked ? 'Genau!' : option.value;
    return <RaisedButton style={style} label={label} onClick={this.onClick} />
  }
}