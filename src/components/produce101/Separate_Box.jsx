import React from "react"

export default function SeparateBox(props) {

  
 

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent"
  }


  return (
    <div style={styles} key={props.key} className="square"
     onClick = {() => {props.toggle(props.id)}}></div>
  )

}