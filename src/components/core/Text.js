import React from 'react';
import { palette } from '../theme/theme';

export default ({ ...props, style: otherStyle }) => {
  const style = {
    margin: 0,
    color: palette.textColor,
    ...otherStyle
  };

  return React.createElement('p', { ...props, style });
};