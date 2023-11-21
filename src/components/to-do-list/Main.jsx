import React from 'react';
import Card from './Card';
import {nanoid} from 'nanoid';

export default function Main() {

  const [list, setList] = React.useState([]);  
  const [add, setAdd] = React.useState(false);

  function handleAdd() {
    setAdd(!add);
  }

  

  function handleChange(event) {
    

    // setList(values => ({...values,
    //   ["id"]: nanoid(),
    //   [name]: value
    // }))

    

  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log(e.target)

    e.target.map((tar) => {
      console.log(tar.value);
    })
    
    // const name = e.target.name;
    // const value = e.target.value;

    // let newList = list.push({["id"]: nanoid(),
    // [name]: value})

    
    // setList(newList);

  }      

  

  return (
    <div className='card-container'>
      <button className="addtask" onClick={handleAdd}>Add</button>
      {add && 
          <form className='form' onSubmit={handleSubmit}>
            <input 
              type='text'
              name='title'
              //value={list.title || ""}              
              placeholder='Title'
              //onChange={handleChange}
            >              
            </input>
            <input 
              type='text'
              name='description'
              placeholder="Description"
              //value={list.description || ""}
              //onChange={handleChange}
            >
            </input>
            <input 
              type='text'
              name='due'
              placeholder='Due Date'
              //value={list.due || ""}
              //onChange={handleChange}
            >              
            </input>            
            <select name="priority" 
            //value={list.priority || ""}
              //</form>onChange={handleChange}
            >
              <option>----------Priority----------</option>              
              <option value='top'>one</option>
              <option value='mid'>mid</option>
              <option value='bottom'>bottom</option>              
            </select>
            <button type="submit">Submit</button>
          </form>
        
      }
      {/* <div className='card-container'>
        <Card 
          list={list}
          setList={setList}
        />
      </div> */}
      {/* <div>
        <h3>Tasks Done</h3>
        {doneTasks.map((task) => <h5><s>{task.text}</s></h5>)}
      </div>   */}
    </div>
  )
}