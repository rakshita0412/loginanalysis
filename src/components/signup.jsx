import { useState, useEffect} from "react";
import{ Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Navbar from "./Navbar";



function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        //axios.post('https://server-sb2a.onrender.com', {name, email, password})
          axios.post('http://localhost:3002/register', {name, email, password})
        .then(res => {
          if(res.data.status==="Success"){
            navigate('/')}
            else{
              alert("Something Wrong");
            }
        }).catch(err=> console.log(err))
    }



    const alreadymail = localStorage.getItem("email");

    useEffect(() => {
      // Check if email is not present in local storage, then redirect to login page
      if (alreadymail) {
          navigate('/dashboard');
      }
  }, [email]);





  return(<>
    <Navbar/>
    <div className="d-flex  justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-1/2">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
           <div className="mb-3">
               <label htmlform="name">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="name"
                  className="form-control rounded-0"
                  onChange={(e) =>  setName(e.target.value)}
                />
             </div> 
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

             <button type="submit" className="btn btn-primary w-100 rounded-0">
                Register
             </button>
             </form>
             <p>Already Have an Account</p>
             <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                Login
             </Link> 
              
          </div>
        </div>
        </>
       );
    }
    export default Signup;                   