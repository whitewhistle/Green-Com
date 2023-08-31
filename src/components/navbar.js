import React from 'react';
import './navbar.css';
import{useState} from 'react';
import Shopingcart from './shopingcart'


export default function Navbar() {
  const[showCart,setShowCart]=useState(false);
  return (
    <>
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
        <div className='right' onClick={()=> setShowCart(true)}>
         Cart
        </div>
      
    </div>
    </header>
    {showCart && <Shopingcart setShowCart={setShowCart}/>}
    </>
  )
}
