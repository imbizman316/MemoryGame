import React from 'react';
import Dice01 from './Dice01';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';
import ReactAudioPlayer from 'react-audio-player';

export default function Body() {

  
  const [time, setTime]  = React.useState(Date.now());
  const [randNum, setRandNum] = React.useState(generateNum());    
  const [win, setWin] = React.useState(false);
  const [roll, setRoll] = React.useState(0);
  const [bestScore, setBestScore] = React.useState( () => JSON.parse(localStorage.getItem("key")) || [])
  

  function resetGame() {
  
    setTime(Date.now());
    setRoll(0);
    setRandNum(generateNum());
    setWin(false);
  }

  /* const [notes, setNotes] = React.useState( () => JSON.parse(localStorage.getItem("key")) || [])*/

  React.useEffect(() => {
    localStorage.setItem("key", JSON.stringify(bestScore))
  }, [bestScore])

  React.useEffect(() => {
    
    let temp;
    let isWin = true;

    for (let i = 0; i < randNum.length; i++) {

      if (i == 0) temp = randNum[i].value;
      if (!(randNum[i].isHeld && temp == randNum[i].value)) { isWin = false}
      temp = randNum[i].value;

    }   

    console.log("dice state changed!");

    isWin ? setWin(true) : setWin(false);
    if (isWin && roll < bestScore) {
      setBestScore(roll);
    }

    if (isWin) {
      setTime((oldTime) => {
        Date.now() - oldTime
      })
    }
    

  }, [randNum])
  
  
  function generateNum() {
      
    const numList = [];

    for (let i=0; i<10; i++) {
      const num = Math.floor(Math.random() * 6 + 1);
      numList.push(
      {
        value: num, 
        isHeld: false,
        id: nanoid()
      }
      )
    }    

    return numList 
       
  } 

  function rollDice() {

    setRoll(oldNum => oldNum + 1);

    setRandNum(oldNum => {
      const newNums = [];
      for (let i = 0; i < oldNum.length; i++) {
        if (!oldNum[i].isHeld) {
          newNums.push({...oldNum[i], value: Math.floor(Math.random() * 6 + 1)})
        } else {
          newNums.push(oldNum[i])
        }
      }
      return newNums
  })
  }

  function stopDice(event, diceIndex) {

    //checkWinner()

    setRandNum(oldNum => {
      const newNums = [];
      for (let i = 0; i < oldNum.length; i++) {
        if (diceIndex === oldNum[i].id) {
          newNums.push({...oldNum[i], isHeld: !oldNum[i].isHeld})
        } else {
          newNums.push(oldNum[i])
        }
      }
      return newNums
    })
    
    
    
  }

  /* function checkWinner() {

    
    let temp;
    let isWin = true;

    for (let i = 0; i < randNum.length; i++) {

      if (i == 0) temp = randNum[i].value;
      if (!(randNum[i].isHeld && temp == randNum[i].value)) { isWin = false}
      temp = randNum[i].value;

    }   

    if (isWin) setWin(true);

  }

  if (win) {
    alert("You won!");
    setWin(false);
  } */
  /* function updateNote(text) {
    
    setNotes(oldNotes => {
      const newArray = []
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i]
        if (oldNote.id === currentNoteId) {
          newArray.unshift({...oldNote, body: text})
        } else {
          newArray.push(oldNote)
        }
      }
      return newArray
    })
  } */

 
  const bodyComp = randNum.map( (num) => {
      
      return (
        <>         

          <Dice01 
            randNum = {num.value}
            key = {num.id}
            id = {num.id}
            isHeld = {num.isHeld}
            stopDice={stopDice}            
          />
        </>
      )
  } )
  
  
  return (
    <>
      <ReactAudioPlayer
          src="./congrats.wav"
          autoPlay
        ></ReactAudioPlayer>
      <div className='dice-container'>      
        {bodyComp}
        
      </div>
      <button onClick={win ? resetGame : rollDice}>{ win ? "Replay" : "Role"}</button>
      {win ? <>
        <ReactAudioPlayer
          src="congrats.wav"
          autoPlay
        ></ReactAudioPlayer>
        <Confetti 
          width="1000"
          height="1000"
        />
        <h3>Congratulations!</h3>        
        <h2>You took {time} to beat.</h2>
      </> : <></>}
      <ul>
        <li>CSS: Put real dots on the dice</li>
        <li><s>Track the number of rolls</s></li>
        <li>Track the time it took to win</li>
        <li><s>Save your best time to localStorage</s></li>
      </ul>
      <h3>You have rolled {roll} {roll == 1 ? "time":"times"}</h3>
      <h1>Your current best score: {bestScore}</h1>      
    </>
  )
}