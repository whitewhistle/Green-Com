import React from 'react'
import './search.css'
import pho from '../assets/CART8.jpg';



export default function Search({setShowSearch})
 {
    return (

    <div className="searchPanel">
        <div className="Content">
            <div className="search-header">
               <input type="text"  placeholder="Search for Products"/>
               <div className="searchclose" onClick={()=> setShowSearch(false)}>offf
                </div>
            </div>
            <div className='sub-items'>
               <div className="left">
                <img src={pho} alt=""/>
                </div>
                <div className="right">
                <div>product name</div>
                </div>
            </div>
        </div>
              
    </div>
  )
}
