import { createTheme } from '@material-ui/core';

const appTheme = createTheme({
  palette: {
    primary: {
      main: '#eceff1',
      light: '#ffffff',
      dark: '#aebfbe',
    },
    secondary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
    },
  },
});

export default appTheme;
