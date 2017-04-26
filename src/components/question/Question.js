import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Text from '../core/Text';

const style = {
  container: {}
};

const mapProps = (state) => ({});

const mapCallbacks = (dispatch) => ({});

export default connect(mapProps, mapCallbacks)(({}) => (
  <div style={style.container}>
    Zu machen...
  </div>
));