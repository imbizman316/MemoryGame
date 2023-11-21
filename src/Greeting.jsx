function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {

  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length ===0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function Greeting() {

  const design = {
    name: "Mikey",
    theme: {
      backgroundColor: 'pink',
      border: 'solid black 1px'
    }
  }

  const animals = ["Mike"];
  //const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>&quot;IT'S FINGER-LICKING GOOD.&quot;</h1>;

      <h1>Animals: </h1>
      <List />
      {/* <List animals={animals} /> */}

      <div className="intro">
        <h1 style={design.theme}>Welcome to {design.name}'s website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br></br>
        <b>And <i>pictures </i> of scientists! </b>
      </p>

    </div>
  )
}

export default Greeting;