import React from "react";

export default function Education() {

  const [count, setCount] = React.useState(0);

  function handleClick(e) {
    
    setCount(count + 1);    

  } 
  
  const returnForms = () => {

    for (let i = 0; i < count; i++){

      return (
        <>
          <label htmlFor="level">Level</label>
          <select name="level">
            <option>Highschool</option>
            <option>Undergraduate</option>
            <option>Master</option>
            <option>2-year College</option>
          </select>
          <section>
            <label htmlFor="school">Name</label>      
            <input name="school"></input>
          </section>
          <section>
            <label htmlFor="start-year">Start</label>
            <input name="start-year"></input>
          </section>
          <section>
            <label htmlFor="end-year">End</label>
            <input name="end-year"></input>
          </section>
        </>           
      )

    }

  }      
  

  return (
    <div>
      <h1>Education</h1>
      <label htmlFor="level">Level</label>
      <select name="level">
        <option>Highschool</option>
        <option>Undergraduate</option>
        <option>Master</option>
        <option>2-year College</option>
      </select>
      <section>
        <label htmlFor="school">Name</label>      
        <input name="school"></input>
      </section>
      <section>
        <label htmlFor="start-year">Start</label>
        <input name="start-year"></input>
      </section>
      <section>
        <label htmlFor="end-year">End</label>
        <input name="end-year"></input>       
      </section>
      <>{returnForms}</>
      
      <h1>{count}</h1>
      <button onClick={handleClick}>Add school</button>
    </div>
  )
}