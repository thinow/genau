import React from 'react';
import { palette } from '../theme/theme';

const style = {
  container: { backgroundColor: palette.primary1Color, boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px' },
  title: { fontSize: '4.5vh', color: palette.alternateTextColor, margin: '2.3vh 4vw', fontWeight: 'normal' }
};

export default ({ style: inheritedStyle }) => (
  <div style={{ ...inheritedStyle, ...style.container }}>
    <h1 style={style.title}>Genau!</h1>
  </div>
);
