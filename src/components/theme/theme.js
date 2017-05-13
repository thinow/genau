import chooseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { green400 } from 'material-ui/styles/colors';

export const theme = chooseTheme;

export const palette = {
  ...chooseTheme.palette,
  goodAnswer: green400
};