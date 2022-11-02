import React, {useState} from 'react'


function TodoList({list, deleteTask, isValid}) {
  // add state
  const myList = list.map((e, index) => {
    return (
      <li value={e} className='items' key={index}>{e} <span onClick={deleteTask} className='close'>x</span></li>
    )
  
  })
  return (
    <div className='todo-list'>
      <ul className='list-items'>
        {myList}
      </ul>
    </div>
  )
}

export default TodoList
