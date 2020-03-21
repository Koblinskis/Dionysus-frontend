import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Box } from '@material-ui/core';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Registration from '../components/Registration'
import Login from '../components/Login'
import About from '../components/About'
import Settings from '../components/Settings'
import Profile from '../components/Profile'
import AddItemPage from '../components/AddItemPage'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const useStyles = makeStyles(theme => ({
  fullPage: {
    minHeight: '842px'
  },
}));

export default function AppRouter(props) {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div>
        <Header changeTheme={props.changeTheme} />
        <Box className={classes.fullPage}>
          <Switch>
            <Route path="/" exact render={() => <Home changeTheme={props.changeTheme} />}/>
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <PrivateRouter path="/settings" component={Settings} />
            <PrivateRouter path="/profile" component={Profile} />
            <PrivateRouter path="/additempage" component={AddItemPage} />
          </Switch>
        </Box>
        <Divider />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}