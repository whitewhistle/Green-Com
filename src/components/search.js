import React from 'react'
import './search.css'
import pho from '../assets/CART8.jpg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";


export default function Search({setShowSearch})
 {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };
    let { data } = useFetch(
        `/api/products?populate=*&filters[title][$contains]=${query}`
    );

    if (!query.length) {
        data = null;
    }

    return (

    <div className="searchPanel">
        <div className="Content">
            <div className="search-header">
               <input 
               type="text" 
                placeholder="Search for Products"
                value={query}
                onChange={onChange}
                />
               <div className="searchclose" onClick={()=> setShowSearch(false)}>&#x1F50D;
                </div>
            </div>
            
            
            {data?.data?.map((item) => (
               <div className='sub-items'  key={item.id}   onClick={() => {
                navigate("/single/" + item.id);
                setShowSearch(false);
            }}>
               <div className="left">
                <img src={"http://localhost:1337" + item.attributes.img.data[0].attributes.url} alt=""
                                            />
                </div>
                <div className="right">
                <div>{item.attributes.title}</div>
                </div>
                </div>

             ))}
            
            
        </div>
              
    </div>
  );
};
