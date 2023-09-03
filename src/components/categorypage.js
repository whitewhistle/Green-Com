import React from 'react'
import './categorypage.css'
import Product from './product'
import {useState, useEffect, useContext} from "react";
import { fetchDataFromApi} from "../utils/api";
import  {Context} from "../utils/context.js";
import axios from "axios";
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";


export default function Categorypage() {
  
  const { categories, setCategories , products, setProducts} = useContext(Context);  
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts();
  }, []);
  const navigate=useNavigate();
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
    <div className="productscontainer">
    <div className="categoryheader">
    <div className="categoryheading">
    {categoryId}
    </div>
    </div>
    
    <div className="products">
    {products ? (
      
      products.data
      .filter((product) => product.attributes.category.data.attributes.title == categoryId)
      .map((product, index) => (
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
  )
}
