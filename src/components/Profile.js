import React from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCookies } from 'react-cookie'
import validator from 'validator'


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
  info: {
    textAlign: 'left'
  },
  edit: {
    minWidth: 400,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 200,
    },
  }
}))

export default function Profile() {
  const classes = useStyles()
  const [cookie, setCookie] = useCookies()
  const [edit, setEdit] = React.useState(false)
  const [user, setUser] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [email, setEmail] = React.useState(null)

  React.useEffect(() => {
    async function getUser() {
      setLoading(true)
      try {
        const res = await fetch(process.env.REACT_APP_NODE_URL + 'profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookie.token
          }
        })
        const resObj = await res.json()
        setUser(resObj)
        setLoading(false)
      } catch (e) {
        return null
      }
    }
    getUser()
  }, [])

  const finishEdit = () => {
    setEdit(false)
  }

  const editStatus = () => {
    console.log('1')
    setEdit(true)
  }

  const handleEmailChange = (e) => {
    e.preventDefault()
    if (e.target !== '') {
      if (validator.isEmail(e.target.value.toLowerCase())) {
        setEmail(e.target.value)
      } else {
        return setEmail(undefined)
      }
    } else
    setEmail(undefined)
  }

  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.signUp}>
        <Typography variant='h2' color='secondary'>Profile</Typography>
        {loading ? console.log('hi'): console.log(user)}
        {edit ? <div className={classes.edit}>
          <TextField
            required
            id="standard-basic"
            label="Username"
            autoFocus
            helperText='Must be 6 characters long'
            defaultValue={user.userName}
            color='secondary'
            style={{marginRight: '10px'}}
          />
          <TextField
            required
            id="standard-basic"
            label="Email"
            color='secondary'
            helperText='Enter a vaild Email'
            onChange={handleEmailChange}
            defaultValue={user.email}
          />
          <TextField
            id="standard-basic"
            label="Name"
            color='secondary'
            defaultValue={user.name === 'Anonymous' ? '' : user.name}
            style={{marginRight: '10px'}}
          />
          <TextField
            id="standard-basic"
            label="Age"
            color='secondary'
            defaultValue={user.age === 0 ? '' : user.age}
          />
          <br/>
          <div style={{paddingTop: '25px'}}></div>
          <Button onClick={finishEdit} variant='contained' color="primary">Save</Button>
          </div>
           : 
          <div className={classes.info}>
            <div style={{paddingTop: '10px'}}></div>
            <Typography variant='subtitle1' color='secondary'>User Name: {user.userName}</Typography>
            <div style={{paddingTop: '10px'}}></div>
            <Typography variant='subtitle1' color='secondary'>Email: {user.email}</Typography>
            <div style={{paddingTop: '10px'}}></div>
            <Typography variant='subtitle1' color='secondary'>Name: {user.name}</Typography>
            <div style={{paddingTop: '10px'}}></div>
            <Typography variant='subtitle1' color='secondary'>Age: {user.age === 0 ? 'Unknown' : `${user.age} years old`}</Typography>
            <div style={{paddingTop: '20px'}}></div>
            <Button onClick={editStatus} variant='contained' color="primary">edit</Button> <Button variant='contained' color="primary">change password</Button>
          </div>
        }
      </Box>
    </Box>
  )
}