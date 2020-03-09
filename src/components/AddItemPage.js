import React, { useEffect } from 'react'
import { Box, Typography, FormControl, Select, MenuItem, InputLabel, TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useCookies } from 'react-cookie'
import { v4 as uuidv4 } from 'uuid'
import Lists from './Lists'

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
let counter = 0

export default function AddItemPage() {
  const classes = useStyles()
  const id = uuidv4();
  const [cookie, setCookie]= useCookies()
  const [dataStructure, setDataStructure] = React.useState('');
  const [form, setForm] = React.useState(undefined)
  const [listItemsGrid, setListItemsGrid] = React.useState(new Map());
  const [listItems, setListItems] = React.useState([])
  const [items, setItems] = React.useState([])
  const [description, setDescription] = React.useState([])
  const [confirm, setConfirm] = React.useState(false)

  // useEffect(() => {
  //   setListItems(listItems.set(id, (<Grid item md={4} sm={12} xs={12} key={uuidv4()}>
  //     <TextField key={uuidv4()} color="secondary" id="standard-basic" label={`Item`} />
  //     <br/>
  //     <TextField key={uuidv4()} color="secondary" id="standard-multiline-flexible" multiline rowsMax="4" label={`Decsription`} />
  //   </Grid>)))
  // }, [])

  const handleChange = async event => {
    setDataStructure(event.target.value);
    chosenData(event.target.value)
  };

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
        <Grid container spacing={6} >
          {[...listItemsGrid.keys()].map(k => listItemsGrid.get(k))}
        </Grid>
        <br/>
        <Button color="secondary" onClick={addItemsList}>
            <AddCircleIcon />Add Item
        </Button>
      </Box>
    )
  }

  const addItemsList = () => {
    let itemsGrid = (<Grid item md={4} sm={12} xs={12} key={uuidv4()}>
      <TextField key={uuidv4()} color="secondary" id="standard-basic" label={`Item`} defaultValue={items[counter]} onChange={(e) => handleItemChange(counter, e)}/>
      <br/>
      <TextField key={uuidv4()} color="secondary" id="standard-multiline-flexible" multiline rowsMax="4" label={`Description`} defaultValue={description[counter]} onChange={(e) => handleDescriptionChange(counter, e)}/>
    </Grid>)
    const newMap = new Map(listItemsGrid.set(counter, itemsGrid))
    setListItemsGrid(newMap)
    counter++;
  }

  const saveListInfo = async () => {
    for (let i = 0; i < items.length; i++){
      setListItems(listItems.concat({item: items[i], description: description[i]}))
      setConfirm(true)
    }
  }

  const saveToDatabase = async () => {
    await postList(listItems)
    setConfirm(false)
  }

  const handleItemChange = (index, e) => {
    setItems(items.concat(e.target.value))
  }

  const handleDescriptionChange = (index, e) => {
    setDescription(description.concat(e.target.value))
  }

  const postList = async (listItems) => {
    try {
      const res = await fetch(process.env.REACT_APP_NODE_URL + 'addlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookie.token,
        },
        body: JSON.stringify(listItems)
      })
      return res
    } catch (e) {
      console.error('Error:', e)
      alert(e)
    }
  }

  return (
    <Box className={classes.center}>
      <Box bgcolor='success.main' border={1} className={classes.formControl}>
        <Typography variant='h3' color='secondary'>List</Typography>
      {/* <FormControl>
        <InputLabel id="demo-simple-select-label" color="secondary">Type of field</InputLabel>
        
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dataStructure}
          onChange={handleChange}
        >
          <MenuItem value={10}>List</MenuItem>
          <MenuItem value={20}>Chart</MenuItem>
          <MenuItem value={30}>Graph</MenuItem>
        </Select> 
      </FormControl> */}
      {/* {dataStructure ? form : undefined} */}
        {list()}
        {confirm ? 
        <Button variant='contained' color="primary" onClick={saveToDatabase}>Confirm Save</Button>
        :
        <Button variant='contained' onClick={saveListInfo}>Save List</Button>
        }
      </Box>
    </Box>
  )
}