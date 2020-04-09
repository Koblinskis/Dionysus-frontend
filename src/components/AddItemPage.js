import React from 'react'
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import ListItem from './listItem'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '30px',
    maxWidth: 750,
    minWidth: 400,
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
  listItems: {
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    minHeight: '60px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
}))

export default function AddItemPage() {
  const classes = useStyles()
  const [form, setForm] = React.useState(undefined)
  const [number, setNumber] = React.useState(0)

  const chosenData = (dataStructure) => {
    switch (dataStructure) {
      case 10:
        setForm(list())
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
      <Box className={classes.listItems}>
          {<ListItem number={number}/>}
        <br/>
        <Button color="secondary" onClick={addItem} style={{marginTop: "20px"}}>
            <AddCircleIcon />Add Item
        </Button>
        <Button color="secondary" onClick={removeItem} style={{marginTop: "5px"}}>
            <RemoveCircleIcon />Remove Item
        </Button>
      </Box>
    )
  }

  const addItem = () => {
    setNumber(number => number + 1)
  }

  const removeItem = () => {
    if(number > 0) {
      setNumber(number => number - 1)
    } else {
      setNumber(0)
    }
  }

  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.formControl}>
        <Typography variant='h3' color='secondary'>List</Typography>
      {/* <FormControl>
        <InputLabel id="demo-simple-select-label" color="secondary">Type of field</InputLabel>
        
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
        {dataStructure ? form : undefined} */}
        {list()}
      </Box>
    </Box>
  )
}