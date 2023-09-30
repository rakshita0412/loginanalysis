import React from 'react'
import { useState, useEffect } from "react";
import{ Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from './Navbar';


function Admin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()



    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        console.warn("calling");
        if(email==="rakshitavipperla@gmail.com"&& password==="3105")
        {
            localStorage.setItem("admin","available")
            navigate('/dashboard');
        }
        else{
            alert("smthng wrong");
        }
    }



  return(<>
    <Navbar />
    <div className="d-flex  justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-1/2">
        <h2>Admin</h2>
        <form onSubmit={handleSubmit}>
           <div className="mb-3">
               <label htmlform="email">
                 <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                  onChange={(e) =>  setEmail(e.target.value)}
                />
             </div>
             <div className="mb-3">
                <label htmlform="email">
                  <strong>Password</strong>
                </label>
                <input
                   type="password"
                   placeholder="Enter Password"
                   name="password"
                   className="form-control rounded-0"
                   onChange={(e) =>  setPassword(e.target.value)}
                />
             </div>

             <button type="submit" className="btn btn-primary  rounded-0">
                Submit
             </button>
             </form>
          </div>
        </div>
        </>
       );
    }
    
export default Admin;