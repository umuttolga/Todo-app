import React from 'react'

function InputBar({data, handleChange, handleClick}) {





  return (
    <div>
      <form className='input-bar'>
        <h3 className='header'>To-do List</h3>
        <input value={data} className='text-input' type="text" onChange={handleChange} placeholder="Enter your next task..."/><button className='btn' onClick={handleClick}>+</button>
        <hr className='hr'></hr>
      </form>
    </div>
  )
}

export default InputBar
