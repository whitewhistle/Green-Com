import React from 'react';
import './product.css';


export default function Product(props) {
  return (
    <div className="Slot">
      <div className="Imag">
        <img src={props.pho} alt=" "></img>
      </div>
      <div className="Details">
        <div className="Name">{props.productName}</div>
        <div className="Description">{props.desc}</div>
        <div className="Price"><h4>&#8377; {props.price}</h4></div>
      </div>
    </div>
  );
}