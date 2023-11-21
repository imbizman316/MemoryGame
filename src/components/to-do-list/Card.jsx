import React from 'react';

export default function Card({list, setList}) {  

  function handleChange(id) {
    const newList = list.map((task) => {
      if (task.id === id) {
        return {...task, isDone: !task.isDone}
      } else {
        return {...task}
      }
    })
    setList(newList);
  }

  return (
    <>
      {list.map((each) => {
        return (
        <div className='task' key={each.id}>
          <div className='task-title'>
            <h3>{each.id}</h3>
            <h3>{each.title}</h3>
            <input type="checkbox" onChange={()=>handleChange(each.id)}></input>
          </div>
          <div className='options' onClick={()=> {alert("hello")}}>...</div>
        </div>
        )
        
      })}
    </>
  )
}