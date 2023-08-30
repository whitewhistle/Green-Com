import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <header className='nav'>
    <div className='navcontent'>
        <div className='left'>
        <ul>

        <li>Home</li>
        <li>|</li>
        <li>About</li>
        <li>|</li>
        <li>Categories</li>
        
        </ul>
        </div>
        <div className='mid'>
        Green-Com
        </div>
        <div className='right'>
         random stuff
        </div>
      
    </div>
    </header>
  )
}
