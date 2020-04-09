import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Typography, Divider, List, ListItem, ListItemText, Drawer} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useCookies } from 'react-cookie'
import postLogout from '../fetchcalls/postLogout'

const useStyles = makeStyles({
  list: {
    width: 250,
    height: '100%'
  },
  menuTitle: {
    fontWeight: '600',
    padding: '20px'
  },
  logOut: {
    color: '#cc0000',
  },
})

export default function MenuDrawer(props) {
  const classes = useStyles()
  const [cookie, setCookie, removeCookie] = useCookies(['token'])

  const logout = async () => {
    const res = await postLogout()
    removeCookie('token')
    window.location.reload()
  }

  const toggleDrawer = (open) => event => {
    props.onChange(open)
  };

  return ( 
    <div>
      <Drawer open={props.open} onClose={toggleDrawer(false)}>
          {<Box
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        bgcolor='success.main'
      >
        <Typography variant='h4' className={classes.menuTitle}>Menu</Typography>
          <Divider color='primary' />
        <List>
          <ListItem button component={NavLink} to={'/'}>
            <ListItemText primary={'Home'} />
            <HomeIcon />
          </ListItem>
          <ListItem button component={NavLink} to={'/profile'}>
            <ListItemText primary={'Profile'} />
            <AccountCircle />
          </ListItem>
          <ListItem button component={NavLink} to={'/settings'}>
            <ListItemText primary={'Settings'} />
            <SettingsIcon />
          </ListItem>
          <ListItem button component={NavLink} to={'/about'}>
            <ListItemText primary={'About'} />
            <InfoIcon />
          </ListItem>
          <ListItem button onClick={logout} className={classes.logOut}>
            <ListItemText primary={'Logout'} />
            <ExitToAppIcon />
          </ListItem>
        </List>
      </Box>}
        </Drawer>
    </div>
  )
}