import React from 'react'
import pho from '../assets/CART8.jpg';
import './single.css'

export default function Single() {
  return (
    <div className="Singlepage-container">
        <div className="layout">
        <div className="singlepage">
            <div className="left">
             <img src={pho} alt=""/>
            </div>
        
            <div className="right">
            <div className="Name">PRODUCT NAME</div>
            <div className="Price">&#8377; 499</div>
            <div className="no">Net wt: 1.00 nos</div>
            <div className="Discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, architecto voluptate magnam error sit porro ipsum possimus autem enim sequi? Libero reprehenderit recusandae ipsa, perferendis harum minus sapiente dolorum placeat.</div>
            <button className="button1">Add to Cart</button>
            </div>
        </div>
        </div>
    </div>
  )
}
