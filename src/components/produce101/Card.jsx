export default function Card(props) {

  

  return (
    <div 
      className="card"
      style={props.darkmode ? {backgroundColor:"black", color: "white"} : {backgroundColor:"white", color: "black"}}

    >
      <div className="name">
      <h1>{props.name_jap}</h1>
        <h3>{props.name_eng}</h3>
      </div>
      <div className="card-bottom">
        <div className="profile-image-container">
          <div 
            className="profile_image" 
            style={{backgroundImage: `url(${props.image})`}}
          ></div>
          <div>
            {props.desc}
          </div>
          <button onClick={() => {props.GetRid(props.id)}}>Delete</button>
        </div>
        <div className="video-container">
          <iframe width="320" height="215"
          src={"https://www.youtube.com/embed/"+ `${props.self_intro_vid}`}
          />
          <iframe width="320" height="215"
          src={"https://www.youtube.com/embed/"+ `${props.focus_vid}`}
          />
        </div>
      </div>
    </div>
  )

}