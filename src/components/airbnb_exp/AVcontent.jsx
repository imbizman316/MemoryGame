export default function AVcontent(props) {

  let word
  props.isPun ? word = "PUN!" : word = "Serious"

  const colors = ["Red", "Orange", "Yellow", "Green"]

  const wrappedColors = colors.map((color) => {
    return <button>{color}</button>
  })
  
  return (
    <div className="av-card">
      <div>{wrappedColors}</div>
      <div className="votes">
        <h3>{props.upvotes}</h3>
        <h3>{props.downvotes}</h3>
      </div>
      <h5>{word}</h5>
      {props.quote && <p className="quote">Quote: {props.quote}</p>}
      <img className="av-picture" style={{backgroundImage: `url(${props.image})`}}></img>
    </div>
  )
}