import React from 'react'
import { Box, Typography, Divider, List, ListItem, ListItemText, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

export default function Drawer(props) {
  const classes = useStyles()

  return ( 
    <div>
      { props.open && 
      <Box
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
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
    </div>
  )
}