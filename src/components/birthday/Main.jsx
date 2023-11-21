import React from 'react';
import Contact from './Contact';
import Card from './Card';
//import { classNames } from 'react-mde/lib/definitions/util/ClassNames';

export default function Main() {

  const [list, setList] = React.useState(Contact);
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();

  const today = `${month}-${day}`;

  const numBirthdays = list.filter((old) => old.birthday === today).length;

  function handleDelete(id) {
    const newList = list.filter((old) => old.id !== id );
    setList(newList);
  }

  return (
    <div className='main'>
      <h1>{year}-{today}</h1>
      <h3>{numBirthdays} birthdays today</h3>      
      <Card 
        people = {list}
        handleDelete = {handleDelete}
        today = {today}
        yearToday = {year}
      />
      <button className='clearall' onClick={()=>setList([]) }>Clear All</button>
    </div>
  )
}