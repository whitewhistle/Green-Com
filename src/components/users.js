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
    setCart,update,setUpdate,users,setUsers} = useContext(Context);  


  useEffect(() => {
    getusers();
  }, [update])

  const navigate=useNavigate();
  
  const getusers = () =>
  {
    
    fetchDataFromApi("/api/users?populate=*")
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  



  return (
    <div className="productadcontainer">
    
    <div className="adtitle" >
    <div className="adSlot">
          <div className="adid">
            ID
          </div>
          <div className="adDetails">
            <div className="adName">TITLE</div>
            <div className="adDescription">EMAIL</div>
            <div className='adaction'></div>
          </div>
        </div>
    </div>

    {users ? (
      
      users
      .map((user, index) => (
        <div className="adsloter" key={user.id} >          
            <Adproduct productid={user.id} pho={4} productName={user.username} 
            desc={user.email} price={4} type={"user"}/>
       
        </div>
      ))

    ) : (
      <li>Loading...</li>
    )}



    </div>
  )
}
