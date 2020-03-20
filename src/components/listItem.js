import React from 'react'
import { Box, TextField, Grid } from '@material-ui/core';



export default function ListItem(props) {

  const [item, setItems] = React.useState([])


  React.useEffect(() => {
    setItems(item.concat(<Grid item md={4} sm={12} xs={12} key={props.number}>
      <TextField key={props.number} color="secondary" id="standard-basic" label={`Item`}/>
      <br/>
      <TextField key={props.number} color="secondary" id="standard-multiline-flexible" multiline rowsMax="4" label={`Description`}/>
    </Grid>))
  }, [props.number])

  return (
    <Grid container spacing={6} >
      {item}
    </Grid>
  )
}