import React, { useEffect } from 'react';
import './adproduct.css';
import axios from "axios";
import  {Context} from "../utils/context.js";
import {useState, useContext} from "react";

export default function Adproduct(props) {
    
    const { categories, setCategories , products, setProducts,
        cartarray,
        setCart,update,setUpdate} = useContext(Context);

    const params = {
        headers: {
            Authorization:"Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        },
    };

      const handledelete = async(id) => 
     {  
        if (props.type=="product")
        {
        const url = `http://localhost:1337/api/products/${id}`;
        try {
            const response = await axios.delete(url, params);
        
            console.log('Product deleted successfully:', response.data);
            setUpdate(update+1)
          } catch (error) {
            console.error('Error deleting product:', error);
          }
        }
        else
        {
        const url = `http://localhost:1337/api/users/${id}`;  
        try {
            const response = await axios.delete(url, params);
        
            console.log('Product deleted successfully:', response.data);
            setUpdate(update+1)
          } catch (error) {
            console.error('Error deleting product:', error);
          } 
        }
        
        



        };
       


    
  return (
        <div className="adSlot">
          <div className="adid">{props.productid}</div>
          {props.type=="product" && <div className="adImag">
            <img src={props.pho} alt=" "></img>
          </div>}
          <div className="adDetails">

            
            <div className="adName">{props.productName}</div>
            <div className="adDescription">{props.desc}</div>
            {props.type=="product" && <div className="adPrice" ><h4>&#8377; {props.price}</h4></div>}
            <div className="adaction"onClick= {()=>handledelete(props.productid)}> X </div>
          </div>
        </div>
      
  )
};
