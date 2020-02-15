import React from "react";
import {hot} from "react-hot-loader";
import AppRouter from './router/AppRouter'
import "./App.css";
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000'
    },
    secondary: {
      light: '#ffffff',
      main: '#000000',
      dark: '#f2f2f2'
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
    default: {
      main: '#ffffff'
    },
    background: {
      default: '#00cccc'
    }
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
      main: '#00cccc',
      dark: '#f2f2f2'
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
    default: {
      main: '#ffffff'
    },
    background: {
      default: '#00cccc'
    }
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    color: '#ffffff'
  },
});

function App() {
  const [themeType, setThemeType] = React.useState(defTheme)

  const chooseTheme = (e) => {
    console.log(e.target.innerText)
    switch(e.target.innerText) {
      case 'dark':
        setThemeType(darkTheme);
        break;
      default: 
        setThemeType(defTheme)
        break;
    }
  }

  return(
    <div className="App">
    <ThemeProvider theme={themeType}>
      <button onClick={chooseTheme}>dark</button>
      <button onClick={chooseTheme}>default</button>
      <AppRouter/>
    </ThemeProvider>
    </div>
  );
}

export default hot(module)(App);