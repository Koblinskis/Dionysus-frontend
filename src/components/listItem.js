import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';



export default function ListItem(props) {
  const [item, setItems] = React.useState([])
  const oldNumber = React.useRef()

  React.useEffect(() => {
    oldNumber.current = props.number
  }, [props.number])
  const old = oldNumber.current

  React.useEffect(() => {
    if(old < props.number) {
      setItems(item.concat(<Grid item md={4} sm={12} xs={12} key={uuidv4()}>
        <TextField color="secondary" id="standard-basic" label={`Item`}/>
        <br/>
        <TextField color="secondary" id="standard-multiline-flexible" multiline rowsMax="4" label={`Description`}/>
      </Grid>))
    } else if(props.number === 0) {
      setItems([])
    } else if(old > props.number) {
      setItems(item.slice(1))
    }
  }, [props.number])

  return (
    <Grid container spacing={6} >
      {item}
    </Grid>
  )
}