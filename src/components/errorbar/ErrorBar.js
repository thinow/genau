import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import * as actions from '../../redux/actions/all';
import * as selectors from '../../redux/selectors/selectors';

const DURATION = 4000; // 4 seconds

const mapProps = (state) => ({
  error: selectors.getError(state)
});

const mapCallbacks = (dispatch) => ({
  onRequestClose: () => dispatch(actions.ERROR_HIDDEN.create())
});

export default connect(mapProps, mapCallbacks)(({ error, onRequestClose }) => (
  <Snackbar
    open={error.displayed}
    message="Ups! Ich habe eine Fehler gemacht..."
    autoHideDuration={DURATION}
    onRequestClose={onRequestClose}
  />
));