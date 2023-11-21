import React from 'react';

export default function Form_App() {

  const [input, setInput] = React.useState({
    email: "",
    password: "",
    password_confirm: "",
    checkbox: false,
  });

  console.log(input);

  function handleChange(event) {

    const {name, value, checked, type} = event.target;
    
    setInput(previous => {
      return {
        ...previous,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    input.password === input.password_confirm ? alert("Successfully signed up")  : alert("Password doesn't match")
    input.password === input.password_confirm && input.checkbox && alert("Thank you")
  }

  return (
    <div className="form-assignment">
      <form className="form-main" onSubmit={handleSubmit}>
        <input 
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={input.email}
        />
        <input 
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={input.password}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="password_confirm"
          onChange={handleChange}
          value={input.password_confirm}
        />
        <div>
          <input 
            type="checkbox" 
            id="checkbox"
            name="checkbox"
            onChange={handleChange}
            checked={input.checkbox}
          />
          <label htmlFor="id">I want to join the newsletter</label>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  )

}