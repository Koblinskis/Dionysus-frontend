import React from 'react'
import { Box, TextField, Grid } from '@material-ui/core';



export default function ListItem(props) {
  return (
    <Grid item md={4} sm={12} xs={12} key={uuidv4()}>
      <TextField key={uuidv4()} color="secondary" id="standard-basic" label={`Item`}/>
      <br/>
      <TextField key={uuidv4()} color="secondary" id="standard-multiline-flexible" multiline rowsMax="4" label={`Description`}/>
    </Grid>
  )
}

