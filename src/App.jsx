import React, {useState, useEffect} from 'react';
import TodoList from './components/todo-list';
import InputBar from './components/input-bar';
import { Grid, Box } from '@mui/material';



function App() {
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const initialList = ["Meditate", "Push-ups", "Enjoy"]

 

  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value)
  }

  
  const handleClick = (e) => {
    e.preventDefault();
    if (data != ''){
      setList([...list, data])
    }
    setData('')
  }
  
  useEffect(() => {
      setList(initialList)
    },[])
    


  const deleteTask = ((e) => {
    e.preventDefault();
    let itemsCopy = [...list];
    itemsCopy.splice(e, 1)
    setList(itemsCopy) 
    })

    

  return (
    <Box m={-1} bgcolor={'#DF57BC'} sx={{height:'100vh', width: '100%'}}>
    <Grid m={0}  container>
      <InputBar
      setData={setData}
      data={data}
      list={list}
      setList={setList}
      handleClick={handleClick}
      handleChange={handleChange}
      wheather={wheather}/>
      
      <TodoList
      data={data}
      setData={setData}
      list={list}
      setList={setList}
      deleteTask={deleteTask} />
    </Grid>
    </Box>
  )
}

export default App

