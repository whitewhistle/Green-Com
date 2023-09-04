import React from 'react'
import './shopingcart.css'
import pho from '../assets/CART8.jpg';
import {useEffect, useContext, useState} from "react";
import {Context} from '../utils/context.js';

export default function Shopingcart({setShowCart}) 
{

  const { categories, setCategories , products, setProducts,
    cartarray,
    setCart,} = useContext(Context); 

    
   let sum=0;

    cartarray.forEach((cartItem) => {
      sum=sum + cartItem.a * cartItem.price;
    });
  

  return (
    <div className={`Panel ${setShowCart ? '' : 'hide'}`}>
        <div className="opac-layer"></div>
        <div className="content">
            <div className="cart-header">
               <div className="left">
                My Cart
                </div>
               <div className="right" onClick={()=> setShowCart(false)}>
               X
                </div>
            </div>
            

            {cartarray ? (
      
      cartarray
      .map((product, index) => (
            <div className='sub-items'> 
               <div className="left">
                <img src={product.photo} alt=""/>
                </div>
                <div className="right">
                <div>{product.item}</div>
                <div>{product.a}</div>
                <div>{product.price}</div>
                </div>
            </div>
            
      ))
    
      ) : (
        <li>Loading...</li>
      )
    }
    
    

            <div className="sub-total">
            <div>SUBTOTAL:</div>
            <div className="price">&#8377;{sum}</div>
            </div>

            <div>
            </div>
        </div>
      
    </div>
  )
}
