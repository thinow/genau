import chooseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { blue500, red500, green400 } from 'material-ui/styles/colors';

export const theme = {
  ...chooseTheme,
  palette: {
    ...chooseTheme.palette,
    primary1Color: blue500,
    pickerHeaderColor: blue500,
    accent1Color: red500
  }
};

export const palette = {
  ...theme.palette,
  goodAnswer: green400
};