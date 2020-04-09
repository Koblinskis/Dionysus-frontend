import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#404040',
      main: '#000000',
      dark: '#333333'
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#333333'
    },
    info: {
      main: '#4d4d4d',
      light: '#002233',
      dark: '#002233'
    },
    error: {
      main: '#ff4d4d',
      light: '#ff9999',
      dark: '#ff9999'
    },
    warning: {
      main: '#f57c00',
      light: '#f57c00',
      dark: '#f57c00'
    },
    success: {
      main: '#56595e',
      light: '#388e3c',
      dark: '#388e3c'
    },
    default: {
      main: '#ffffff'
    },
    background: {
      default: '#4d4d4d'
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff'
    },
    divider: '#ffffff'
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    color: '#ffffff'
  },
});

const defTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#008000',
      main: '#006600',
      dark: '#004d00'
    },
    secondary: {
      light: '#ffffff',
      main: '#000000',
      dark: '#f2f2f2'
    },
    info: {
      main: '#e6ffe6',
      light: '#002233',
      dark: '#002233'
    },
    error: {
      main: '#e60000',
      light: '#e60000',
      dark: '#e60000'
    },
    warning: {
      main: '#f57c00',
      light: '#f57c00',
      dark: '#f57c00'
    },
    success: {
      main: '#ffffff',
      light: '#388e3c',
      dark: '#388e3c'
    },
    default: {
      main: '#000000'
    },
    background: {
      default: '#e6ffe6'
    },
    text: {
      primary: '#000000',
      secondary: '#000000'
    },
    divider: '#000000'
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    color: '#ffffff'
  },
});

export { defTheme, darkTheme }