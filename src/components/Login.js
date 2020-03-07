import React from 'react'
import { NavLink } from 'react-router-dom';
import { Typography, Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  inputFields: {
    marginTop: '20px',
    minWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '10px',
    },
  },
  signUpTitle: {
    fontSize: '34px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  bottomText: {
    marginTop: '30px'
  }
}))

export default function Login() {
  const classes = useStyles();
  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.signUp}>
        <Typography variant="h4" component="h2" color='secondary' className={classes.signUpTitle}>
          Login
        </Typography>
        <Box>
          <TextField
            required
            id="standard-basic"
            label="Username"
            autoFocus
            color='secondary'
            className={classes.inputFields}
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            color='secondary'
            className={classes.inputFields}
          />
      </Box>
      <Button variant="contained" color="primary">Login</Button>
      <Box className={classes.bottomText}>
        <Typography variant="caption" color='secondary'>Don't have an account <NavLink to="/registration" color='secondary'>Signup</NavLink></Typography>
      </Box>
    </Box>
  </Box>
  )
}