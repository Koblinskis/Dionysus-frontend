import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Registration from '../components/Registration'
import Login from '../components/Login'
import About from '../components/About'

export default function AppRouter(props) {
  return (
    <BrowserRouter>
      <div>
        <Header changeTheme={props.changeTheme} />
        <Switch>
          {console.log(props)}
          <Route path="/" exact render={() => <Home changeTheme={props.changeTheme} />}/>
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}