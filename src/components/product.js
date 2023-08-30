import React from 'react';
import pho from '../assets/CART8.jpg';
import './product.css';

export default function Product() {
  return (
    <div className="Slot">
        <div className="Imag">
         <img src={pho} alt=" "></img>
        </div>
        <div className="Details">
        <div className="Name">Product-Name</div>
        <div className="Price"><h4>&#8377; 499</h4></div>
        </div>
    </div>
  )
}
