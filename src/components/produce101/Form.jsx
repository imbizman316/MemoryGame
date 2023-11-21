import React from 'react';
import Image from '../../components/produce101/meme.jpg';
//import Memes from '../../components/produce101/memeData';
//import Count from '../../components/produce101/Count';
import Star from '../produce101/Star';
import WindowTracker from '../../components/WindowTracker'


export default function Form() {

  const [show, setShow] = React.useState(true);

  function toggleShow() {
    setShow( current => {
      return !current
    } )
  }

  /* const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "mikeylee@hotmail.com",
    isFavorite: false,
  }) */
  
  /* memeImage, setmemeImage */

  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1);

  const [input, setInput] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);
  
  React.useEffect(() => {

    
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => setAllMemeImages(data.data.memes))

  },[])
    
    


  /* function toggleFavorite() {

    setContact( prev => {
      return {...prev,
        isFavorite: !prev.isFavorite
      }
    })
    
  } */

  function handleChange(event) {

    const {name, value} = event.target;

    setInput( previous => {
      return { ...previous,
        [name]: value

      }
    })

  }

  let temp;
  let randNum;

  function handleClick() {

    
    

    while (randNum === temp) {
      randNum = Math.floor(Math.random() * allMemeImages.length)
    }

    //alert(randNum)
    //alert(temp)

    temp = randNum;



    const Image = allMemeImages[randNum].url;
    

    setInput( image => {
      
      return {...image,
        randomImage: Image,
      }
      
    })

    
  
  }  


  return (
    <div className="form-container">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <div>
        <div>
          <input 
            type="text" 
            name="topText"
            value={input.topText}
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="bottomText"
            value={input.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className="meme-button">Get a new meme image</button>
        <img src={Image} className='icon'/>

        {/* <div>
          <p>Current user: {props.user}</p>
          <Star isFilled={contact.isFavorite}/>
          <p>{contact.firstName} {contact.lastName}</p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div> */}

        {/* <div>
          <p>{memeImage.topText}</p>
          <p>{memeImage.bottomText}</p>
        </div> */}
      </div>
      <div className='result-container'>
        <div className='meme-text-container'>
          <p className='meme-text'>{input.topText}</p>
          <p className='meme-text'>{input.bottomText}</p>
        </div>
        <img src={input.randomImage} className='result'></img>
      </div>
      <button onClick={toggleShow}>Toggle Window Tracker</button>
      {show && <WindowTracker />}
    </div>
  )
}

