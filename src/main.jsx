import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Poem from './Foods.jsx'
import './index.css'
import RenderList from './RenderList.jsx'
import TodoList from './keys/Keys.jsx'
import AppButton from './keys/Button.jsx'
import Profile from './keys/PropsApp.jsx'
import Gallery from './Challenges/Extract-a-component/App.jsx'
import Newjeans from './Challenges/Comp-memory/App.jsx'
import Image from '../src/Challenges/render-and-commit/initial-render/Gallery.jsx'
import App1 from '../src/Challenges/sharing_state_between/App.jsx';
//import recipes from './recipes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App1/>
    
  </React.StrictMode>,
);

//<Newjeans/>  
//<Gallery/>

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Image/>,
); */

//,




    {/* <App />
//<RecipeList />    
    <Greeting /> 
    <Profile/>
    <AppButton/>
    <TodoList />
    <Poem />
    <RenderList />    
  */}
