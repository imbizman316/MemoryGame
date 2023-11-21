import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import {useParams} from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const Profile = () => {

  const {name} = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h1> The profile visited is here: </h1>
      {name === "popeye" ? 
        (
          <Popeye />
        ) : name === "spinach" ? (
          <Spinach />
        ) : (
          <DefaultProfile />
        )
      }
    
    </div>
  );
};

export default Profile;