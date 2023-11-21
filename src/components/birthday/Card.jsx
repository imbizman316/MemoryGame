import React from 'react';

export default function Card({people, handleDelete, today, yearToday}) {
  
  return (
    <>
      {people.map((person) => {
        const {id, name, year, birthday, photo} = person;

        if (today === birthday) {
          return (
            <div key={id}>
              <div className='person-top'>
                <h2>HAPPY BIRTHDAY!</h2>              
                <h3>Today she turned {yearToday - year}</h3>
              </div>
              <article className="person">
                <img src={photo} alt={name} width='250px'/>
                <div>
                  <h4>{name}</h4>
                  <h5>{year}</h5>                  
                  {/* <button onClick={()=>handleDelete(id)}>Delete</button>               */}
                </div>
              </article>
            </div>
          )
        }
        
      })}
    </>
  )
}