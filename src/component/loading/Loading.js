import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { palette } from '../theme/theme';

export default () => (
  <div style={{textAlign: 'center'}}>
    <CircularProgress style={{marginTop: '16vh'}} size={60} thickness={5} />
    <p style={{ fontSize: '7vw', color: palette.primary1Color }}>Laden...</p>
  </div>
);
