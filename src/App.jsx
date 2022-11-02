import React, {useState, useEffect} from 'react'
import TodoList from './components/todo-list'
import InputBar from './components/input-bar'
import "./App.css"


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
  }, [])

  const deleteTask = ((e) => {
    e.preventDefault();
    let itemsCopy = [...list];
    itemsCopy.splice(e, 1)
    setList(itemsCopy) 
    })

    

  return (
    <div className='wrapper'>
      <InputBar 
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
    </div>
  )
}

export default App

