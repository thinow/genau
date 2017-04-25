import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { theme } from './theme/theme';
import AppBody from './AppBody';

// Needed for onTouchTap : http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default () => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <AppBody />
  </MuiThemeProvider>
);