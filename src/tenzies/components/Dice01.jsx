import React from "react";

export default function Dice01(props) {  

  let diceShape;

  if (props.randNum == 1) diceShape = <div className="dots">.</div>
  else if (props.randNum == 2) diceShape = <div className="dots">..</div>
  else if (props.randNum == 3) diceShape = <div className="dots">...</div>
  else if (props.randNum ==4) diceShape = <div className="dots"><div>..</div><div>..</div></div>
  else if (props.randNum ==5) diceShape =<div className="dots"><div>..</div><div>.</div><div>..</div></div>
  else if (props.randNum ==6) diceShape = <div className="dots"><div>...</div><div>...</div></div>

  


  return (   

    <div 
      className="dice"
      style={{ backgroundColor: props.isHeld ? "#59E391" : "white"}}
      onClick={(event)=>props.stopDice(event, props.id)}
    >
      {diceShape}
    </div>
  )
}