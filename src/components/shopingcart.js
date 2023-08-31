import React from 'react'
import './shopingcart.css'
import pho from '../assets/CART8.jpg';
import{useState} from 'react';

export default function Shopingcart({setShowCart}) 
{
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
            <div className='sub-items'>
               <div className="left">
                <img src={pho} alt=""/>
                </div>
                <div className="right">
                <div>product name</div>
                <div>-5+</div>
                <div>499</div>
                </div>
            </div>
            <div className="sub-total">
            <div>SUBTOTAL:</div>
            <div className="price">&#8377;499</div>
            </div>
            <div>
            <button className="checkout">Checkout</button>
            </div>
        </div>
      
    </div>
  )
}
