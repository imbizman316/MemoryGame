import React from "react"
import { render } from "react-dom";

export default function Form_exercise(){

  const [bigList, setBigList] = React.useState([])
  const [formData, setFormData] = React.useState({name: "", email: "", message: ""});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({...prevFormData,[name]:value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Ya");
    setBigList(currentList => {
      return [
        ...currentList,
        {formData},
      ]
    });
  }
  

  let renderList = bigList.map(
    (prev) => {
      
      const val = prev.name;

      return (
        <div>
          Hello
          {val}
          <h3>{prev.name}</h3>
          <button>Delete</button>
        </div>        
      )
    }
  )
  

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/>

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

        <button type="submit">Submit</button> 

      </form>
      <>
        {renderList }
      </>
    </div>
  )
}