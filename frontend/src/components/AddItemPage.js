import React, { useEffect } from 'react'
import { Box, Typography, FormControl, Select, MenuItem, InputLabel, TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
  let counter = 1;
  const [dataStructure, setDataStructure] = React.useState('');
  const [form, setForm] = React.useState(undefined)
  const [listItems, setListItems] = React.useState(new Map())

  useEffect(() => {
    setListItems(listItems.set(counter, (<Grid item md={4} sm={12} xs={12} key={counter}>
      <TextField key={counter} color="secondary" id="standard-basic" label={`Item ${counter}`} />
      <br/>
      <TextField key={-1 * counter} color="secondary" id="standard-basic" label={`Decsription ${counter}`} />
    </Grid>)))
  }, [])

  const handleChange = async event => {
    setDataStructure(event.target.value);
    chosenData(event.target.value)
  };

  const chosenData = (dataStructure) => {
    console.log(dataStructure)
    switch (dataStructure) {
      case 10:
        setForm(list)
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
        <Grid container spacing={6} >
          {[...listItems.keys()].map((el) => (listItems.get(el)))}
          {console.log(listItems)}
        </Grid>
        <br/>
        <Button color="secondary" onClick={addItemsList}>
            <AddCircleIcon />   Add Item
        </Button>
      </Box>
    )
  }

  const addItemsList = () => {
    counter++;
    {console.log(listItems)}
    let items = (<Grid item md={4} sm={12} xs={12} key={counter}>
      <TextField key={counter} color="secondary" id="standard-basic" label={`Item ${counter}`} />
      <br/>
      <TextField key={-1 * counter} color="secondary" id="standard-basic" label={`Decsription ${counter}`} />
    </Grid>)
    setListItems(new Map(listItems.set(counter, items)))
  }

  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.formControl}>
        <Typography variant='h3' color='secondary'>Choose a Format</Typography>
        
      <FormControl>
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
      {dataStructure ? form : undefined}

      </Box>
    </Box>
  )
}