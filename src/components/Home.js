import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary" onClick={props.changeTheme}>
        dark
      </Button>
      <Button variant="contained" color="secondary" onClick={props.changeTheme}>
        default
      </Button>
      <Button variant="contained" info='true'>
        Info
      </Button>
      <Button variant="contained" error='false'>
        Error
      </Button>
      <Button variant="contained" warning='true'>
        Warning
      </Button>
      <Button variant="contained" success='true' color='primary'>
        Success
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
    </div>
  );
}