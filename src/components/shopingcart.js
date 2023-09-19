import React from 'react'
import './shopingcart.css'
import pho from '../assets/CART8.jpg';
import {useEffect, useContext, useState} from "react";
import {Context} from '../utils/context.js';
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../utils/api";

export default function Shopingcart({setShowCart}) 
{

  const { categories, setCategories , products, setProducts,
    cartarray,
    setCart,} = useContext(Context); 

    const stripePromise = loadStripe(
      process.env.STRIPE_APP_PUBLISHABLE_KEY
  );

  const handlePayment = async () => {
    try {
        const stripe = await stripePromise;
        const res = await makePaymentRequest.post("/orders", {
            products: cartarray,
        });
        await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
        });
    } catch (err) {
        console.log(err);
    }
};

    
   let sum=0;

    cartarray.forEach((cartItem) => {
      sum=sum + cartItem.a * cartItem.price;
    });

  
    console.log(cartarray);

    const onIncrease = (product) => {
      const updatedCart = cartarray.map((item) => {
        if (item.id == product.id) {
          return { ...item, a: item.a + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    };
  
    const onDecrease = (product) => {
      const updatedCart = cartarray.map((item) => {
        if (item.id == product.id ) {
          return { ...item, a: item.a - 1 };
        }
        return item;
      });
      setCart(updatedCart);
    };


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
  cartarray.map((product, index) => (
    product.a > 0 ? (
      <div className='sub-items' key={index}>
        <div className="left">
          <img src={product.photo} alt=""/>
        </div>
        <div className="right">
          <div>{product.item}</div>
          <div className="but">
            <span onClick={() => onDecrease(product)} >-</span>
            {product.a}
            <span onClick={() => onIncrease(product) }>+</span>
          </div>
          <div>{product.price}</div>
        </div>
      </div>
    ) : null // If product.a is not greater than 0, render null
  ))
) : (
  <li>Loading...</li>
)}

    
    

            <div className="sub-total">
            <div>SUBTOTAL:</div>
            <div className="price">&#8377;{sum}</div>
            </div>

            <div>
            <button className="checkout" onClick={handlePayment}>Checkout</button>
            </div>
        </div>
      
    </div>
  )
}
