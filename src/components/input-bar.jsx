import React from 'react'
import { Typography, Divider, Grid, Button, TextField } from '@mui/material';




function InputBar({data, handleChange, handleClick, setData, list, setList}) {

  return (
    <Grid m={2} container spacing={2} textAlign={'center'} alignContent={'center'} >
        <Grid item xs={12} >
          <Typography m={-1} mb={2} color='primary.dark' variant='h3'>To-Do List</Typography>
        </Grid>
        <Grid item xs={8} >
        <TextField onKeyDown={(e) => {
          if (e.key === "Enter") {
            setList([...list, data])
            setData('')

          }
        }} sx={{width: '100%'}} onChange={handleChange} value={data} id="standard-basic" label="Enter your next task here..." variant="outlined" />
        </Grid>
        <Grid item xs={4}>
        <Button sx={{mt:1, width: '200px', height: '40px'}} onClick={handleClick} variant="contained">+ Add</Button>
        </Grid>
        <Divider sx={{width: '90%', mt:4}} />
    </Grid>
  )
}

export default InputBar
