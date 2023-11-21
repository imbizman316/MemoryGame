import {Link} from "react-router-dom";
//import {Profile} from "./Profile";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          {/* <li>
            <Profile name="popeye">PopEye</Profile>
          </li> */}
          <li>
            <hr></hr>
            <Link to="profile/popeye">PopEye</Link>
          </li>
          <li>
            <hr></hr>
            <Link to="profile/spinach">Spinach</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default App;