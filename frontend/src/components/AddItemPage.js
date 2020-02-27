import React from 'react'
import { Box, Typography, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default function AddItemPage() {
  const classes = useStyles()
  const [dataStructure, setDataStructure] = React.useState('');
  const [form, setForm] = React.useState(undefined)

  const handleChange = async event => {
    setDataStructure(event.target.value);
    chosenData(event.target.value)
  };

  const chosenData = (dataStructure) => {
    console.log(dataStructure)
    switch (dataStructure) {
      case 10:
        setForm(<h1>List</h1>)
        break;
      case 20:
        setForm(<h1>Chart</h1>)
        break;
      case 30:
        setForm(<h1>Graph</h1>)
        break;
      default:
        setForm(undefined)
        break;
    }
  }

  const list = () => {
    return (
      <FormControl>
        <InputLabel id="demo-simple-select-label">Type of field</InputLabel>
      </FormControl>
    )
  }

  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.signUp}>
        <Typography variant='h3' color='secondary'>Choose a Format</Typography>
        
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type of field</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dataStructure}
          onChange={handleChange}
        >
          <MenuItem value={10}>List</MenuItem>
          <MenuItem value={20}>Chart</MenuItem>
          <MenuItem value={30}>Graph</MenuItem>
        </Select>
      </FormControl>
      {dataStructure ? form : undefined}

      </Box>
    </Box>
  )
}