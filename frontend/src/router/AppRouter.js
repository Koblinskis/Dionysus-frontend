import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Registration from '../components/Registration'
import Login from '../components/Login'
import About from '../components/About'

const useStyles = makeStyles(theme => ({
  fullPage: {
    minHeight: '100%'
  },
}));

export default function AppRouter(props) {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <div>
        <Header changeTheme={props.changeTheme} />
        <Switch classname={classes.fullPage}>
          {console.log(props)}
          <Route path="/" exact render={() => <Home changeTheme={props.changeTheme} />}/>
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
        <Divider />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}