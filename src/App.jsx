import React, {useState, useEffect} from 'react'
import TodoList from './components/todo-list'
import InputBar from './components/input-bar'
import { Grid, Box } from '@mui/material';



function App() {
  const [wheather, setWheather] = useState([])
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
    try {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=34.0522&lon=118.2437&appid=e253ab227dee7c4618bceb3a7b5d89c0`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          return setWheather(data)
        })
        console.log(wheather)
    } catch (error) {
      console.log(error)
    }
    setList(initialList)
  }, [])

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
      handleChange={handleChange}/>
      
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

