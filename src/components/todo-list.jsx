import React from 'react'
import { ListItemText, ListItem, IconButton, ListItemAvatar, Avatar, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function TodoList({list, deleteTask}) {
  const myList = list.map((e, index) => {
    return (
      <ListItem key={index}>
      <ListItemAvatar>
        <Avatar>
          <ArrowForwardIosIcon/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText 
      primary={e}
      />
      <IconButton onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
    )
  
  })
  return (
    <Grid container>
      {myList}
    </Grid>
  )
}

export default TodoList
