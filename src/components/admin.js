import React from 'react';
import './admin.css';
import Adproduct from './adproduct';
import {useState, useEffect, useContext} from "react";
import { fetchDataFromApi} from "../utils/api";
import  {Context} from "../utils/context.js";
import axios from "axios";
import { useParams } from 'react-router-dom';
import {useNavigate}  from "react-router-dom";
import  handledelete  from './adproduct.js';



export default function Admin() {
  
  const { categories, setCategories , products, setProducts,
    cartarray,
    setCart,update,setUpdate} = useContext(Context);  
  const { categoryId } = useParams();
  const [fetchingProducts, setFetchingProducts] = useState(false);

  useEffect(() => {
    getProducts();
  }, [update])

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
    <>
    <div className="Entrybar">
      <div>
      Product
      </div>
      <div className="EntryButton" onClick= {() => navigate(`/proentry`)}>
      + Create new entry
      </div>
    
    </div>
    <div className="productadcontainer">
    
    <div className="adtitle" >
    <div className="adSlot">
          <div className="adid">
            ID
          </div>
          <div className="adImag">
            IMG
          </div>
          <div className="adDetails">
            <div className="adName">TITLE</div>
            <div className="adDescription">DESC</div>
            <div className="adPrice"><h4>PRICE</h4></div>
            <div className='adaction'></div>
          </div>
        </div>
    </div>

    {products ? (
      
      products.data
      .map((product, index) => (
        <div className="adsloter" key={product.id} >          
            <Adproduct productid={product.id} pho={"http://localhost:1337" + product.attributes.img.data[0].attributes.url} productName={product.attributes.title} 
            desc={product.attributes.desc} price={product.attributes.Price} type={"product"}/>
       
        </div>
      ))

    ) : (
      <li>Loading...</li>
    )}



    </div>
    </>
  )
}
