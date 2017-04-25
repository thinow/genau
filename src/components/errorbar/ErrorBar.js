import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const DURATION = 4000; // 4 seconds

export default () => (
  <Snackbar
    open={false}
    message="Ups! Ich habe eine Fehler gemacht..."
    autoHideDuration={DURATION}
    onRequestClose={undefined}
  />
);