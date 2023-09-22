import React from 'react';
import {FormGroup,Input} from 'reactstrap';
import './login.css';
import {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { storeUser } from "../utils/helpers";
import { fetchDataFromApi } from '../utils/api';


export default function Login() {
    
    const initialUser = {password:"", email: ""};
    const [token,setToken]=useState("")
    const [user,setUser] = useState(initialUser);
    const navigate= useNavigate();
    
     const handleChange = ({target}) => {
        const { name, value}=target;
        setUser((currentUser) => (
            {
            ...currentUser,
            [name]:  value
            }
        ))
     };

    const handleLogin = async() => 
     {
        const url = 'http://localhost:1337/api/auth/local?populate=*';
       try{
          if(user.identifier && user.password)
          { 

            const {data} = await axios.post(url, user);
            console.log(data)
            const token = data.jwt;
            setToken(token);
            console.log( data.user.username );
            const id=data.user.id;          
                      

            fetchDataFromApi(`/api/users/${id}?populate=*`)
            .then((res) => {
             const role=res.role.name;
            console.log(res.role.name);

            if (data.jwt && role=="psuadmins")    
            { 
              storeUser(data,role);
              setUser(initialUser);
              alert("Logged in successfully as admin!");
              navigate("/admin");
            }
            
            else if (data.jwt)    
            { 
              storeUser(data,role);
              setUser(initialUser);
              alert("Logged in successfully!");
              navigate("/");
            }
            


            })
            .catch((error) => {
              console.error(error);
            });

          



          

          return token;
          }
       }
       catch(error)
       {
        alert(error);
       }
        
       };
     

  return (
    <div className="logincontainer">
      <div className='loginmargin'>
      <div className="loginPanel">
        <div className="title">

        LOGIN
        </div>
        
        
        <div className="inputer">

      
      <input
      type="email"
      name="identifier"
      value={user.identifier}
      onChange={handleChange}
      placeholder="enter your email"
      
      > 
      </input>
      
      </div>
      <div className="inputer">

      
      
      <input
      type="password"
      name="password"
      value={user.password}
      onChange={handleChange}
      placeholder="enter your password"
      > 
      </input>

      
      </div>
   
    
    <button onClick={handleLogin}>Login</button>
    
    <div className="signuplink"> 
    
    <Link to="/registration">sign up</Link>
    
    </div>
      
      </div>
      </div>
    </div>
  )
}

