import React from 'react';
import './adbar.css';
import{useState} from 'react';
import Shopingcart from './shopingcart'
import Search from './search';
import {useEffect, useContext} from "react";
import { fetchDataFromApi} from "../utils/api";
import  {Context} from "../utils/context.js";
import {useNavigate} from "react-router-dom";
import { userData } from "../utils/helpers";
import pho from "../assets/Screenshot 2023-09-06 093031.png";



export default function Adbar() {

  const { username } = userData();
  const navigate=useNavigate();




  const[showCart,setShowCart]=useState(false);
  const[showSearch,setShowSearch]=useState(false);

  return (
    <>

    <div className='ad'>
    <div className='adcontent'>
    
        <div className='top'>
        Green-Dash
        </div>
        
        <div className='middle'>
    <ul>
        <li onClick= {() => navigate(`/admin`)}>
        Products
        </li>
        <li onClick= {() => navigate(`/users`)}>
        Users
        </li>
    </ul>
        </div>

        

        <div className='bottom'>
         
         <a href="/logout"> Logout- </a>
         {username}
        </div>
      
    </div>
    </div>
    </>
  )
}
