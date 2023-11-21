import React from 'react';
import Logo from '../assets/image/React-icon.svg.png';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo-contain'>
        <img className="logo" src={Logo}></img>
        <h2 className="logo-text">ReactFacts</h2>
      </div>
      <div className='right-menu'>
        <a href="#">React Course - Project 1</a>
      </div>
    </div>
  )
}