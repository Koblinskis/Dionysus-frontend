import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { useCookies } from 'react-cookie'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  root: {
    maxWidth: 900,
    minWidth: 500,
    backgroundColor: theme.palette.background.default,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [login, setLogin] = React.useState(true)
  const [cookie, setCookie, removeCookie] = useCookies(['token'])

  React.useEffect(() => {
    if(cookie.token !== undefined){
      setLogin(false)
    }
  }, [cookie])

  return (
    <Box className={classes.center}>
      {login ? 
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
        color='secondary'
      > 
      <BottomNavigationAction component={NavLink} to={`/`} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={NavLink} to={`/registration`} label="Sign-Up" icon={<GroupAddIcon />} />
      <BottomNavigationAction component={NavLink} to={`/login`} label="Login" icon={<ExitToAppIcon />} />
      <BottomNavigationAction component={NavLink} to={`/about`} label="About" icon={<InfoIcon />} />
    </BottomNavigation>
    :
    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
        color='secondary'
      > 
      <BottomNavigationAction component={NavLink} to={`/`} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={NavLink} to={`/profile`} label="Profile" icon={<AccountCircleIcon />} />
      <BottomNavigationAction component={NavLink} to={`/addItemPage`} label="List" icon={<PlaylistAddIcon />} />
      <BottomNavigationAction component={NavLink} to={`/about`} label="About" icon={<InfoIcon />} />
      <BottomNavigationAction component={NavLink} to={`/settings`} label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
    }
    
  </Box>
  );
}