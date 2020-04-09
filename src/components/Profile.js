import React from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core';
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
  info: {
    textAlign: 'left'
  },
  edit: {
    display: 'flex',
    flexDirection: 'row',
  }
}))

export default function Profile() {
  const classes = useStyles()
  const [cookie, setCookie] = useCookies()
  const [edit, setEdit] = React.useState(false)
  const [user, setUser] = React.useState({})
  const [loading, setLoading] = React.useState(false)

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

  const editStatus = () => {
    console.log('1')
    setEdit(true)
  }

  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.signUp}>
        <Typography variant='h2' color='secondary'>Profile</Typography>
        {loading ? console.log('hi'): console.log(user)}
        {edit ? <div>
          <TextField
            required
            id="standard-basic"
            label="Username"
            autoFocus
            helperText='Must be 6 characters long'
            color='secondary'
          />
          <br/>
          <TextField
            required
            id="standard-basic"
            label="Email"
            color='secondary'
            helperText='Enter a vaild Email'
          />
          <br/>
          <TextField
            required
            id="standard-basic"
            label="Name"
            color='secondary'
          />
          <br/>
          <div style={{paddingTop: '10px'}}></div>
          <TextField
            required
            id="standard-basic"
            label="Age"
            color='secondary'
          />
          </div>
           : 
          <div className={classes.info}>
            <Typography variant='subtitle1' color='secondary'>User Name: {user.userName}</Typography>
            <Typography variant='subtitle1' color='secondary'>Email: {user.email}</Typography>
            <Typography variant='subtitle1' color='secondary'>Name: {user.name}</Typography>
            <Typography variant='subtitle1' color='secondary'>Age: {user.age === 0 ? 'Unknown' : user.age}</Typography>
            <Button onClick={editStatus}>edit</Button> <Button>change password</Button>
          </div>
        }
      </Box>
    </Box>
  )
}