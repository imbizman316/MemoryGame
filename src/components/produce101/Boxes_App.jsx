import React from "react"
import boxes from "../../assets/data/boxes"
import SeparateBox from "../../components/produce101/Separate_Box"

export default function Boxes_App(props) {

  const [box, setBox] = React.useState(boxes);

  function toggle(id) {

      setBox(prevSquares => {
        
        return prevSquares.map((square) => {
        
          return square.id === id ? {...square,on: !square.on} : square
                    
        })
                
      })

  }


    
  const boxArray = box.map( square => {
    return (<SeparateBox 
      key={square.id} 
      on={square.on}      
      toggle={toggle}
      id={square.id}
      />)
})

  return (
    <main className="box-container">
      {boxArray}
    </main>
  )

}