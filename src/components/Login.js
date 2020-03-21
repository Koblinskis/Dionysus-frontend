import React from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import { Typography, Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import validator from 'validator'
import { useCookies } from 'react-cookie'

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
  const [cookie, setCookie] = useCookies()
  const [field1, setField1] = React.useState(undefined)
  const [fieldType, setFieldType] = React.useState(undefined)
  const [password, setPassword] = React.useState(undefined)
  const [submit, setSubmit] = React.useState(true)

  React.useEffect(() => {
    checkInputs()
  })

  const handleField1Change = (e) => {
    e.preventDefault()
    if (e.target !== '') {
      if (validator.isEmail(e.target.value.toLowerCase())) {
        setField1(e.target.value)
        return setFieldType('email')
      }
      if (e.target.value.length > 5) {
        setField1(e.target.value)
        return setFieldType('userName')
      }
    } else {
      setField1(undefined)
    }
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    if (e.target.value.length > 5) {
      setPassword(e.target.value)
    } else {
      setPassword(undefined)
    }
  }

  const postLogin = async (data) => {
    try {
      const res = await fetch(process.env.REACT_APP_NODE_URL + 'login', {
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
      alert('Invaild User')
    }
  }

  const checkLogin = async () => {
    const data = { [fieldType]: field1, password }
    const userToken = await postLogin(data)
    if (userToken !== undefined) {
      setCookie('token', userToken)
    }
  }

  const checkInputs = () => {
    if (field1 && password) {
      setSubmit(false)
    } else {
      setSubmit(true)
    }
  }

  return (
    <Box className={classes.center}>
    {cookie.token && <Redirect to={'/additempage'}></Redirect>}
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
            defaultValue={field1}
            onChange={handleField1Change}
            className={classes.inputFields}
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            color='secondary'
            defaultValue={password}
            onChange={handlePasswordChange}
            className={classes.inputFields}
          />
      </Box>
      <div style={{height: '20px'}}></div>
      <Button variant="contained" color="primary" disabled={submit} onClick={checkLogin}>Login</Button>
      <Box className={classes.bottomText}>
        <Typography variant="caption" color='secondary'>Don't have an account? <NavLink to="/registration" color='secondary'>Signup</NavLink></Typography>
      </Box>
    </Box>
  </Box>
  )
}