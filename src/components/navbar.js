import React from 'react';
import './navbar.css';
import{useState} from 'react';
import Shopingcart from './shopingcart'
import Search from './search';
import {useEffect, useContext} from "react";
import { fetchDataFromApi} from "../utils/api";
import  {Context} from "../utils/context.js";
import {useNavigate} from "react-router-dom";
import { userData } from "../utils/helpers";
import pho from "../assets/Screenshot 2023-09-06 093031.png"


export default function Navbar() {

  const { username } = userData();
const { categories, setCategories , products, setProducts,
  cartarray,
  setCart,} = useContext(Context);  
useEffect(() => {
  getCategories();
}, []);

const navigate=useNavigate();

const getCategories = () => {

  fetchDataFromApi("/api/categories?populate=*")
    .then((res) => {
      console.log(res);
      setCategories(res);
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });

};





  const[showCart,setShowCart]=useState(false);
  const[showSearch,setShowSearch]=useState(false);

  return (
    <>
    
    <header className='seacrhContainer'>
      <div className='searchContent'>
      <div className='logo' onClick= {() => navigate(`/`)}>
      <img src={pho}/>

      </div>
      <div className='searchBar'onClick={()=> setShowSearch(true)}>
      &#x1F50D;
      </div>
      </div>
    </header>


    <header className='nav'>
    <div className='navcontent'>
        <div className='left'>
        <ul>
        {categories ? (
      categories.data.map((category, index) => (
        <React.Fragment key={category.id} 
        > 
          <li onClick= {() => navigate(`/category/${category.attributes.title}`)}>{category.attributes.title}</li>
          {index < categories.data.length - 1 && <li>|</li>}
        </React.Fragment>
      ))
    ) : (
      <li>Loading...</li>
    )}
  </ul>
  

        </div>
        <div className='mid'>
        Green-Com
        </div>
        <div className='right' onClick={()=> setShowCart(true)}>
         Cart | Wanna 
         <a href="/logout"> Logout </a>
         {username}?
        </div>
      
    </div>
    </header>
    {showCart && <Shopingcart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  )
}
