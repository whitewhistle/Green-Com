import React from 'react'
import pho from '../assets/CART8.jpg';
import './single.css'
import { useParams } from 'react-router-dom';
import {useEffect, useContext, useState} from "react";
import { fetchDataFromApi} from "../utils/api";
import  {Context} from "../utils/context.js";

export default function Single() {
  const { productId } = useParams();
  const { categories, setCategories , products, setProducts} = useContext(Context); 
  const [q,setQ]=useState(1)

  const decrement =() =>
  {
    setQ(q-1);
  }
  
  const increment =() =>
  {
    setQ(q+1);
  }


  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () =>
  {
    
    fetchDataFromApi("/api/products?populate=*")
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  


  return (
    <div className="Singlepage-container">
        <div className="layout">
        
        
            

            {products ? (
      
      products.data
      .filter((product) => product.id == productId)
      .map((product, index) => (

        < div className="singlepage" key={product.id}>
            <div className="left">
             <img src={"http://localhost:1337" + product.attributes.img.data[0].attributes.url} alt=""/>
            </div>
          <div className="right">
            <div className="Name">{product.attributes.title}</div>
            <div className="Price">&#8377; {product.attributes.Price} </div>
            <div className="no">Net wt: 1.00 nos</div>
            <div className="Discription">{product.attributes.desc}</div>
            <div className="cart-card">

            <div className="Quantity">
              <span onClick= {()=> increment()}>+</span>
              <span>{q}</span>
              {<span onClick={() => q > 1 && decrement()}>-</span>}
            </div>
            <button className="button1">Add to Cart</button>
            </div>
            </div>
            </div>
      ))

    ) : (
      <li>Loading...</li>
    )}
            
            
            
        
        </div>
    </div>
  )
}
