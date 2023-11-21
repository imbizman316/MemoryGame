import React from "react"

export default function App_CV() {

  const [info, setInfo] = React.useState([]);
  const [eachInfo, setEachInfo] = React.useState({
    name:"Mike",
    email:"pride81_@hotmail.com",
    phone:"010-9249-7693"
  });

  const handleChange = (type, e) => {      

      //let updatedValue = {};
      //updatedValue = {...eachInfo, [type]:e.target.value}

      setEachInfo((prev) => {
        return {
        ...prev,
        [type]:e.target.value
      }});
  }

  const handleSubmit = (e) => {
      
      e.preventDefault();
    
      const newList = info;
      newList.push(eachInfo)
      setInfo(newList);

      console.log(info[0].name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>cv application</h4>
      <section>
        <label htmlFor="name">Name</label>
        <input type='text' name='name' onChange={(e) => handleChange('name', e)}></input>
      </section>
      <section>
        <label htmlFor="email">Email</label>
        <input type='text' name='email' onChange={(e) => handleChange('email',e)}></input>
      </section>
      <section>
        <label htmlFor="phone">Phone</label>
        <input type='tel' name='phone' onChange={(e) => handleChange('phone',e)}></input>
      </section>
      <button>Submit</button>


      <h1>Contact Info.</h1>
      <h3>{eachInfo.name}</h3>
      {/* <h3>{info[info.length-1]}</h3> */}
      <h3>{eachInfo.email}</h3>
      {/* <h3>{info[info.length-1]}</h3> */}
      <h3>{eachInfo.phone}</h3>
    </form>
  )

}