import React from 'react'
import './products.css'
import Product from './product'
import {useEffect, useContext} from "react";
import { fetchDataFromApi} from "../utils/api";
import  {Context} from "../utils/context.js";
import axios from "axios";


export default function Products() {
  
  const { categories, setCategories , products, setProducts} = useContext(Context);  
  
  useEffect(() => {
    getProducts();
  }, []);

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
    <div className="productscontainer">
     fish  off
    <div className="products">
    
    {products ? (
      
      products.data.slice(0,8).map((product, index) => (
        <div key={product.id}>
          <Product pho={"http://localhost:1337" + product.attributes.img.data[0].attributes.url} productName={product.attributes.title} 
          desc={product.attributes.desc} price={product.attributes.Price} />
        </div>
      ))
    ) : (
      <li>Loading...</li>
    )}
    
    
    

    </div>
    </div>
  )
}
