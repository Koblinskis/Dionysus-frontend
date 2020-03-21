import React from 'react'
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  signUp: {
    margin: '30px',
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px',
      maxWidth: 200,
    },
    alignContent: 'center',
    textAlign: 'center',
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
}))

export default function Home(props) {
  const classes = useStyles()

  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.signUp}>
        <Typography variant='body1' style={{'text-align': 'left'}} color='secondary'>
          <h1 style={{'margin-bottom': 0, 'text-align': 'center'}}>Welcome to Dionysus</h1> <h3 style={{'margin-top': '10px', 'text-align': 'center'}}>A one-stop shop to store your data!</h3>
          <p>Want to jump right in?</p>
          <Button variant='contained' color='primary' style={{margin: '0 10px'}} component={NavLink} to={'/login'}>Login</Button>
          <Button variant='contained' color='primary' style={{margin: '0 10px'}} component={NavLink} to={'/registration'}>Register</Button>
          <h3>About Dionysus</h3>
          <p>Dionysus allows you to:</p>
          <ul style={{'font-size': '14px'}}>
            <li>Create an account</li>
            <li>Login to an existing account</li>
            <li>Log out of your account</li>
            <li>Log into multiple devicing using a unique, patent-pending authorizion strategy</li>
            <li>Permanently delete your account</li>
            <li>Switch between website themes</li>
            <li>Create list items that are stored and visible only to YOU!</li>
            <li>Your passwords are encryped before they are stored to maximize security</li>
          </ul>
          <h3>Theming</h3>
          <p>Check out the themes:</p>
          <Button variant='contained' color='primary' style={{margin: '0 10px'}} onClick={props.changeTheme}>default</Button>
          <Button variant='contained' color='primary' style={{margin: '0 10px'}} onClick={props.changeTheme}>dark</Button>
        </Typography>
      </Box>
    </Box>
  )
}