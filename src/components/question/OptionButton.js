import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class extends Component {
  render() {
    const { style, option } = this.props;

    return <RaisedButton style={style} label={option.value} />
  }
}