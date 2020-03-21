import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'
import { CookiesProvider } from 'react-cookie'

import AppRouter from './router/AppRouter'
import { defTheme, darkTheme } from './theme'

import "./App.css";
import 'normalize.css'


function App() {
  const [themeType, setThemeType] = React.useState(defTheme)

  function chooseTheme(e) {
    console.log(e.target.innerText)
    switch(e.target.innerText.toLowerCase()) {
      case 'dark':
        setThemeType(darkTheme);
        break;
      default: 
        setThemeType(defTheme)
        break;
    }
  }

  return(
    <CookiesProvider>
      <ThemeProvider theme={themeType} >
        <Box bgcolor='info.main'> 
        {console.log(themeType)}
          <AppRouter changeTheme={chooseTheme}/>
        </Box>
      </ThemeProvider>
    </CookiesProvider>
   
  );
}

export default App;