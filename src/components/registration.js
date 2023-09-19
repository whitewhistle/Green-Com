import React from 'react'
import { Button } from 'reactstrap'
import {FormGroup,Input} from 'reactstrap';
import {useState} from 'react';
import axios from "axios";
import './registration.css';
import { useNavigate } from "react-router-dom";

const initialUser = { email: "", password: "", username: "" };
export default function Registration() {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async() => {
  try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        alert("registered in successfully!");
        setUser(initialUser);
        navigate("/login");
        }
      }
     
    catch (error)
    {
      console.log(error)
    }
  };


  
  
  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  
  return (
    <div className='registercontainer'>
     <div className='registermargin'>

     
      <div className='registerPanel'>
      <div className='title'>
        Registration
      </div>
      <div className='inputer'>
      <input
      type="text"
      name="username"
      value={user.username}
      onChange={handleUserChange}
      placeholder="enter your name"
      
      > 
      </input>
      </div>

      <div className='inputer'>
      <input
      type="email"
      name="email"
      value={user.email}
      onChange={handleUserChange}
      placeholder="enter your email"
      
      > 
      </input>
      </div>

      <div className='inputer'>
      <input
      type="password"
      name="password"
      value={user.password}
      onChange={handleUserChange}
      placeholder="Enter Password"
      
      > 
      </input>
      </div>
    <Button onClick={signUp}>
     Register
    </Button>
    </div>
    </div>
    </div>
  )
}
