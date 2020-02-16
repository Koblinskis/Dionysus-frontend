import React from 'react'
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    alignContent: 'center'
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
  input: {
    fontWeight: 500,
    color: theme.palette.secondary
  },
  signUpTitle: {
    textAlign: 'center',
    fontSize: '34px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  }
}))

export default function Registration() {
  const classes = useStyles()
  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.signUp}>
        <Typography variant="h4" component="h2" color='secondary' className={classes.signUpTitle}>
          Registration
        </Typography>
        <div>
        <TextField
          required
          id="standard-basic"
          label="Username"
          autoFocus
          color='secondary'
          className={classes.inputFields}
          inputProps={{
            color: 'white'
          }}
        />
        <TextField
          required
          id="standard-basic"
          label="Email"
          color='secondary'
          className={classes.inputFields}
          InputProps={{
            className: classes.input
          }}
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          color='secondary'
          className={classes.inputFields}
          InputProps={{
            className: classes.input
          }}
        />
        <TextField
          required
          id="standard-password-input"
          label="Comfirm Password"
          type="password"
          autoComplete="current-password"
          color='secondary'
          className={classes.inputFields}
          InputProps={{
            className: classes.input
          }}
        />
      </div>
      </Box>
    </Box>
  )
}