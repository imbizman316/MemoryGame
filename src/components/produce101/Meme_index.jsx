import Form from './Form';
import React from 'react';
import Body from './Body_exemple';

export default function MemeIndex() {

  const [user, setUser] = React.useState("Mike fucking Lee");

  return (
    <div className="meme-container">
      <Form
        user={user}
        setUser={setUser}
      />
      
    </div>
  )
}

{/* <Body
        user={user}
        setUser={setUser}
      /> */}