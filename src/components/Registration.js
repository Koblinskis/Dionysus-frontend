import React, { useEffect } from 'react'
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import { Typography, Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCookies } from 'react-cookie'
import validator from 'validator'
import Home from './Home'

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

export default function Registration() {
  const classes = useStyles()
  const [first, setFirst] = React.useState(0)
  const [second, setSecond] = React.useState(0)
  const [third, setThird] = React.useState(0)
  const [userName, setUserName] = React.useState(undefined)
  const [email, setEmail] = React.useState(undefined)
  const [userPassword, setUserPassword] = React.useState(undefined)
  const [confirmPassword, setConfirmPassword] = React.useState(undefined)
  const [password, setPassword] = React.useState(undefined)
  const [submit, setSubmit] = React.useState(true)
  const [cookie, setCookie] = useCookies()

  React.useEffect(() => {
    checkInputs()
  })

  const handleUserNameChange = (e) => {
    e.preventDefault()
    setFirst(1)
    
    if (e.target.value.length > 5) {
      setUserName(e.target.value)
    } else
    setUserName(undefined)
  }

  const handleEmailChange = (e) => {
    e.preventDefault()
    setSecond(1)
    if (e.target !== '') {
      if (validator.isEmail(e.target.value.toLowerCase())) {
        setEmail(e.target.value)
        checkInputs()
      } else {
        return setEmail(undefined)
      }
    } else
    setEmail(undefined)
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    setThird(1)
    if (e.target.value.length > 5) {
      setUserPassword(e.target.value)
      checkInputs()
    } else
    setUserPassword(undefined)
  }

  const handleConfirmPasswordChange = (e) => {
    e.preventDefault()
    setThird(1)
    checkInputs()
    if (e.target.value.length > 5) {
      setConfirmPassword(e.target.value)
      checkInputs()
    } else
    setConfirmPassword(undefined)
  }

  const checkPassword = () => {
    if (confirmPassword === userPassword) {
      return setPassword(userPassword)
    }
    setPassword(undefined)
  }

  const checkInputs = () => {
    checkPassword()
    if (userName && email && password) {
      setSubmit(false)
    } else {
      setSubmit(true)
    }
  }

  const postUser = async (data) => {
    try {
      const res = await fetch(process.env.REACT_APP_NODE_URL + 'registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      const resObj = await res.json()
      return resObj.token
    } catch (e) {
      console.error('Error:', e)
    }
  }

  const createUser = async () => {
    const data = { userName, email, password }
    const userToken = await postUser(data)
    setCookie('token', userToken)
  }

  return (
    <Box className={classes.center}>
      {cookie.token && <Redirect to={'/additempage'}></Redirect>}
      <Box bgcolor='success.main' border={1} className={classes.signUp}>
        <Typography variant="h4" component="h2" color='secondary' className={classes.signUpTitle}>
          Registration
        </Typography>
        <Box>
          <TextField
            required
            id="standard-basic"
            label="Username"
            autoFocus
            error={!userName && first}
            helperText='Must be 6 characters long'
            color='secondary'
            defaultValue={userName}
            onChange={handleUserNameChange}
            className={classes.inputFields}
          />
          <TextField
            required
            id="standard-basic"
            label="Email"
            color='secondary'
            error={!email && second}
            helperText='Enter a vaild Email'
            defaultValue={email}
            onChange={handleEmailChange}
            className={classes.inputFields}
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            error={!userPassword && third}
            helperText='Must be 6 characters long'
            autoComplete="current-password"
            color='secondary'
            onChange={handlePasswordChange}
            className={classes.inputFields}
          />
          <TextField
            required
            id="standard-password-input"
            label="Comfirm Password"
            type="password"
            error={!password && third}
            helperText='Passwords must match'
            autoComplete="current-password"
            color='secondary'
            onChange={handleConfirmPasswordChange}
            className={classes.inputFields}
          />
        </Box><br/>
        <Button variant="contained" color="primary" disabled={submit} onClick={createUser}>Sign-Up</Button>
        <Box className={classes.bottomText}>
          <Typography variant="caption" color='secondary'>Have an account <NavLink to="/login">Login</NavLink></Typography>
        </Box>
      </Box>
    </Box>
  )
}