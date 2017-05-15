import chosenTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { blue500, red500, green400 } from 'material-ui/styles/colors';

export const theme = {
  ...chosenTheme,
  palette: {
    ...chosenTheme.palette,
    primary1Color: blue500,
    pickerHeaderColor: blue500,
    accent1Color: red500
  }
};

export const palette = {
  ...theme.palette,
  goodAnswer: green400
};