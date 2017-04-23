import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { palette } from '../theme/theme';
import Text from '../core/Text';

const style = {
  container: { textAlign: 'center' },
  progress: { marginTop: '16vh' },
  text: { fontSize: '7vw', color: palette.primary1Color, marginTop: '6vh' }
};

export default ({ style: inheritedStyle }) => (
  <div style={{ ...inheritedStyle, ...style.container }}>
    <CircularProgress style={style.progress} size={60} thickness={5} />
    <Text style={style.text}>Laden...</Text>
  </div>
);
