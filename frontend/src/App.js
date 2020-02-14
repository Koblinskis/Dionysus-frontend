import React from "react";
import {hot} from "react-hot-loader";
import AppRouter from './router/AppRouter'
import "./App.css";
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  const matches = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeType, setThemeType] = React.useState(false)

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#f2f2f2',
        main: '#1a66ff',
        dark: '#000000'
      },
      secondary: {
        light: '#ffffff',
        main: '#ffffff',
        dark: '#ffffff'
      },
      info: {
        main: '#002233',
        light: '#002233',
        dark: '#002233'
      },
      error: {
        main: '#d32f2f',
        light: '#d32f2f',
        dark: '#d32f2f'
      },
      warning: {
        main: '#f57c00',
        light: '#f57c00',
        dark: '#f57c00'
      },
      success: {
        main: '#388e3c',
        light: '#388e3c',
        dark: '#388e3c'
      },
      background: {
        default: '#b2e5f7'
      }
    },
    typography: {
      fontFamily: 'Raleway, Arial',
      color: '#ffffff'
    },
  });

  const themeChange = () => {
    setThemeType(true)
  }

  return(
    <div className="App">
    <ThemeProvider theme={theme}>
      <button>dark</button>
      <AppRouter />
    </ThemeProvider>
    </div>
  );
}

export default hot(module)(App);