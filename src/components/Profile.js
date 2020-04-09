import React from 'react'
import { Box, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
}))

export default function Profile() {
  const classes = useStyles()
  const [cookie, setCookie] = useCookies()
  const [edit, setEdit] = React.useState(false)

  const getUser = async (res, req) => {
    try {
      const res = await fetch(process.env.REACT_APP_NODE_URL + 'profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookie.token,
        }
      })
      const resObj = await res.json()
      return resObj
    } catch (e) {
      console.error('Error:', e)
      return null
    }
  }

  const check = async () => {
    const user = await getUser()
    console.log(user)
  }

  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.signUp}>
        <Typography variant='h2' color='secondary'>Profile</Typography>
        {edit ? <div>
          <TextField
            required
            id="standard-basic"
            label="Username"
            autoFocus
            helperText='Must be 6 characters long'
            color='secondary'
          />
          <TextField
            required
            id="standard-basic"
            label="Email"
            color='secondary'
            helperText='Enter a vaild Email'
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            helperText='Must be 6 characters long'
            autoComplete="current-password"
            color='secondary'
          />
          </div>
           : 
          <div>hi <button onClick={check}>check</button></div>
        }  
      </Box>
    </Box>
  )
}