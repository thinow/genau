import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import * as actions from '../../redux/actions/all';
import * as selectors from '../../redux/selectors/selectors';

const DURATION = 4000; // 4 seconds

const Presentation = ({ error, onRequestClose }) => (
  <Snackbar
    open={error.displayed}
    message="Ups! Ich habe eine Fehler gemacht..."
    autoHideDuration={DURATION}
    onRequestClose={onRequestClose}
  />
);

const mapStateToProps = (state) => ({
  error: selectors.getError(state)
});

const mapDispatchToProps = (dispatch) => ({
  onRequestClose: () => dispatch({ type: actions.ERROR_HIDDEN })
});

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);