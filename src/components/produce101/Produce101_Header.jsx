import Logo from '../produce101/logo.jpg';
import Girls from '../../assets/data/Girls';
import Card from '../produce101/Card';
import React from 'react';

export default function Header() {

  const [darkmode, setDarkmode] = React.useState(false);
  const [girls, setGirls] = React.useState(Girls);
  const [isShown, setIsShown] = React.useState(false);
  const [messages, setMessages] = React.useState(["yo", "baka"]);
  const [name, setName] = React.useState(
    { firstName:"", 
      lastName:"", 
      email:"",
      comment: "",
      isFriendly: true,
      employement: "",
      favColor: "",
    }
  );

  function handleDarkMode() {
    setDarkmode ( previous => !previous )
  }

  function handleChange(event) {

    const {id, value, type, checked} = event.target

    setName(previous => {
      
      return {
        ...previous,
        [id]: type === "checkbox" ? checked : value
      }
    })
    
    //setName(event.target: event.target.value)    
    

  }
    
  function getValues() {
    const japanese = document.querySelector('.japanese-name').value;
    const english = document.querySelector('.english-name').value;
    const image_url = document.querySelector('.image-url').value;
    const self_intro = document.querySelector('.self-intro').value;
    const focus_vid = document.querySelector('.focus-vid').value;
    const desc = document.querySelector('.desc').value;

        
    setGirls( previousGirls => {
      return [...previousGirls, 
      
        { id: girls.length + 1,
          name_jap: japanese,
          name_eng: english,
          image: image_url,
          self_intro_vid: self_intro,
          focus_vid: focus_vid,
          desc: desc,},
      ]     
    })

    console.log(girls)
  }

  function toggleIsShown() {
    setIsShown (previous => {
      return !previous
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  function GetRid(id) {

    alert(id);

    setGirls(prevGirls => {

      const newGirls = []
      for (let i = 0; i < prevGirls.length; i++) {
        const currentGirl = prevGirls[i]
        if (currentGirl.id !== id) {
          const updatedGirl = currentGirl
          newGirls.push(updatedGirl)
      }
    }
      
      return newGirls
                    
    })    

  }
  
    const girlData = girls.map((girl) => {
      return (
        <Card 
          darkmode={darkmode}
          key = {girl.id}
          id = {girl.id}
          GetRid={GetRid}
          name_jap = {girl.name_jap}
          name_eng = {girl.name_eng}
          image = {girl.image}
          self_intro_vid = {girl.self_intro_vid}
          focus_vid = {girl.focus_vid}
          desc = {girl.desc}
  
        />
      )
    })


  const submitMenu = <div>
    <label htmlFor='jap'>japanese</label>
    <input type='text' className='japanese-name'></input>
    <input type='text' className='english-name'></input>
    <input type='text' className='image-url'></input>
    <input type='text' className='self-intro'></input>
    <input type='text' className='focus-vid'></input>
    <input type='text' className='desc'></input>
    <button type='submit' onClick={getValues} >Submit</button>
  </div>


  return (
    <>
    <div 
      className="header-container"
      style={darkmode ? {backgroundColor:"black", color:"white"} : {backgroundColor:"white", color:"black"}}
    >
      <img src={Logo}></img>
      {/* <span>Mike's Favorite Girls of Produce 101</span> */}
        {isShown && submitMenu}
        {/* <form onSubmit={handleSubmit}> */}
          {/* <input 
            type="text"
            id="firstName"
            placeholder='First Name'
            onChange={handleChange}
            value={name.firstName}
          /> */}
          {/* <input 
            type="text"
            id="lastName"
            placeholder='Last Name'
            onChange={handleChange}
            value={name.lastName}
          /> */}
          {/* <input 
            type="email"
            id="email"
            placeholder='email'
            onChange={handleChange}
            value={name.email}
          /> */}

          {/* <textarea 
            id="comment"
            placeholder='Leave a comment'
            onChange={handleChange}
            value={name.comment}
          /> */}

          {/* <input
            type="checkbox"
            id="isFriendly"
            checked={name.isFriendly}
            onChange={handleChange}
          /> */}
          
          {/* <input
            type="radio"
            name='unemployed'
            id="employement"
            value="unemployed"
            checked={name.employement === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor='part-time'>Unemployed</label> */}

          {/* <input
            type="radio"
            name='part-time'
            id="employement"
            value="part-time"
            checked={name.employement === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor='part-time'>Part-time</label>

          <input
            type="radio"
            name='full-time'
            id="employement"
            value="full-time"
            checked={name.employement === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor='full-time'>Full-time</label> */}

          {/* <select
            id="favColor"
            value={name.favColor}
            onChange={handleChange}
          >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <button>Submit</button>
        </form> */}

        {/* <h5>{messages.length === 0 ? "You are all caught up" : `You have ${messages.length} message${messages.length > 1 && "s"}`}</h5> */}
        
        <button onClick={toggleIsShown}>{isShown ? "Close Search" : "Open Search"}</button>
        <div className='darkmode'>
          <p>Light</p>
          <div 
            className='circle-container' 
            onClick={handleDarkMode}
            style={darkmode ? {justifyContent:"right", backgroundColor: "white", borderColor:"black"} : {justifyContent:"left", backgroundColor: "black", borderColor:"white"}}
          >
            <div 
              className='darkmode-circle'
              style={{backgroundColor: darkmode ? "black" : "white"}}  
            ></div>
          </div>
          <p>Dark</p>
        </div>
    </div>
    <div className="main-container">
      {girlData}
    </div>
    </>
  )

}