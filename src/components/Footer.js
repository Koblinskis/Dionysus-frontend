import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { useCookies } from 'react-cookie'
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
    [theme.breakpoints.down('xs')]: {
      minWidth: 200,
      maxWidth: 400,
      padding: 0
    },
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      minWidth: '60px'
    },
  },
  button2: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [login, setLogin] = React.useState(true)
  const [cookie, setCookie] = useCookies(['token'])

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
      <BottomNavigationAction className={classes.button2} component={NavLink} to={`/`} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction className={classes.button2} component={NavLink} to={`/registration`} label="Sign-Up" icon={<GroupAddIcon />} />
      <BottomNavigationAction className={classes.button2} component={NavLink} to={`/login`} label="Login" icon={<ExitToAppIcon />} />
      <BottomNavigationAction className={classes.button2} component={NavLink} to={`/about`} label="About" icon={<InfoIcon />} />
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
      <BottomNavigationAction className={classes.button} component={NavLink} to={`/`} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction className={classes.button} component={NavLink} to={`/profile`} label="Profile" icon={<AccountCircleIcon />} />
      <BottomNavigationAction className={classes.button} component={NavLink} to={`/addItemPage`} label="List" icon={<PlaylistAddIcon />} />
      <BottomNavigationAction className={classes.button} component={NavLink} to={`/about`} label="About" icon={<InfoIcon />} />
      <BottomNavigationAction className={classes.button} component={NavLink} to={`/settings`} label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
    }
    
  </Box>
  );
}