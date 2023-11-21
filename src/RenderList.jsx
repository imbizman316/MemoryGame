function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

function RenderList() {

  const people = [ {
    id: 0,
    name: 'Creola Katherin Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculation',
    imageId: 'MK3eW3A',
  }, {
    id: 1,
    name: 'Mario Jose Molina-Pasquel Henriquez',
    profession: 'chemist',
    accomplishment: 'spaceflight calculation',
    imageId: 'mynHUSa',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'spaceflight calculation',
    imageId: 'bE7W1ji',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'spaceflight calculation',
    imageId: 'IOjWm71',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'spaceflight calculation',
    imageId: 'lrWQx8l',
  }];

  const chemists = people.filter(person => person.profession === 'chemist');
  const notChemist = people.filter(person => person.profession !== 'chemist');

  const listItems = chemists.map(person => 
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
    );

    const listItems2 = notChemist.map(person => 
      <li>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
      ); 


  return (
    <ul>
      <h1>Chemists</h1>
      {listItems}
      <h1>Non-chemists</h1>
      {listItems2}
    </ul>
  )
}

export default RenderList;