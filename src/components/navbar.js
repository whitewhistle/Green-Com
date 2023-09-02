import React from 'react';
import './navbar.css';
import{useState} from 'react';
import Shopingcart from './shopingcart'
import Search from './search';
import {useEffect, useContext} from "react";
import { fetchDataFromApi} from "../utils/api";

import  {Context} from "../utils/context.js";


export default function Navbar() {

const { categories, setCategories} = useContext(Context);  
useEffect(() => {
  getCategories();
}, []);

const getCategories = () => {
  fetchDataFromApi("/api/categories?populate=*").then((res) => { 
    console.log(res);
    setCategories(res);
  });

};

  const[showCart,setShowCart]=useState(false);
  const[showSearch,setShowSearch]=useState(false);
  return (
    <>
    
    <header className='seacrhContainer'>
      <div className='searchContent'>
      <div className='logo'>
       fish
      </div>
      <div className='searchBar'onClick={()=> setShowSearch(true)}>
        offf
      </div>
      </div>
    </header>


    <header className='nav'>
    <div className='navcontent'>
        <div className='left'>
        <ul>
        
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
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  )
}
