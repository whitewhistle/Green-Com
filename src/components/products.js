import React from 'react'
import './products.css'
import Product from './product'
import {useState, useEffect, useContext} from "react";
import { fetchDataFromApi} from "../utils/api";
import  {Context} from "../utils/context.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Banner from './banner';

import some from '../assets/some.jpg';
import farmer from '../assets/farmer.jpg';


export default function Products() {
  
  const { categories, setCategories , products, setProducts,
    cartarray,
    setCart,} = useContext(Context);  
  const [n, setN] = useState(Math.floor(window.innerWidth / 180));

  const navigate=useNavigate();
  

  useEffect(() => {
    const updateN = () => {
      setN(Math.floor(window.innerWidth / 180));
    };

    window.addEventListener('resize', updateN);

    return () => {
      window.removeEventListener('resize', updateN);
    };
  }, []);



  useEffect(() => {
    getProducts();
  }, [n]);


  const getProducts = () => {
    
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
    <>
    
    <Banner/>
     
    <div className="blue">

    

   
    <div className="productscontainerh">
     <div className="containtitle">
     <div className="productstitle">
      Deal Of The Day
     </div>
     </div>
    <div className="products">
    {products ? (
      
      products.data.slice(0,n).map((product, index) => (
        <div className="sloter" key={product.id} onClick= {() => navigate(`/single/${product.id}`)}>
          <Product pho={"http://localhost:1337" + product.attributes.img.data[0].attributes.url} productName={product.attributes.title} 
          desc={product.attributes.desc} price={product.attributes.Price} />
        </div>
      ))
    ) : (
      <li>Loading...</li>
    )}
    
    </div>


    </div>
    </div>
    
    <div className="somecontainer">
      <img src={some} className="some"/>
      <img src={farmer} className="farmer"/>
    </div>

    </>
  )

}
