import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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

  return (
    <Box className={classes.center}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      color='secondary'
    >
      <BottomNavigationAction component={NavLink} to={`/`} label="Home" icon={<FavoriteIcon />} />
      <BottomNavigationAction component={NavLink} to={`/registration`} label="Sign-Up" icon={<LocationOnIcon />} />
      <BottomNavigationAction component={NavLink} to={`/login`} label="Login" icon={<LocationOnIcon />} />
    </BottomNavigation>
  </Box>
  );
}