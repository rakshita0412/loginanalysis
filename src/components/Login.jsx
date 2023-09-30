import React from 'react'
import { useState, useEffect } from "react";
import{ Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from './Navbar';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const alreadymail = localStorage.getItem("email");

    useEffect(() => {
      // Check if email is not present in local storage, then redirect to login page
      if (alreadymail) {
          navigate('/dashboard');
      }
  }, [email]);




    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        console.warn("calling");
        // axios.post('https://server-sb2a.onrender.com', {email, password})
        axios.post('http://localhost:3002/login', {email, password})
        .then(res => {
          // navigate('/dashboard')
          console.warn(res.data);
          if (res.data.Status === "Success"){
            console.warn("Login Success");
            navigate('/homepage');
            localStorage.setItem("email", email);
            const date = new Date();
            console.warn(date.getUTCDate(), date.getTime());
            const data = {
              email,
              loginTime : ""+date.getHours()+" "+date.getMinutes(),
              loginDate : date.getDate()+" "+date.getMonth()+" "+date.getFullYear(),
              loginCount:1,
              perDayLoginCount:1,
             // IPaddress: ,

            }
            axios.post('http://localhost:3002/updateUserData', data)
            .then(res=>{
              console.warn(res.data)
            })
          }
          else{
            console.warn("Password is incorrect or mail not found");
            alert("Password is incorrect or mail not found");
          }
      }).catch(err=> console.log(err))
    }



  return(<>
    <Navbar />
    <div className="d-flex  justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-1/2">
        <h2>Login</h2>
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
                Login
             </button>
             </form>
             <p>Already Have an Account</p>
             <Link to="/register" className="btn btn-default border  bg-light rounded-0 text-decoration-none">
                Signup
             </Link>  
          </div>
        </div>
        </>
       );
    }
    
export default Login;  
// import React from 'react'
// import { useState, useEffect } from "react";
// import{ Link, useNavigate } from "react-router-dom";
// import axios from 'axios'
// import Navbar from './Navbar';


// function Login() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()


//     const alreadymail = localStorage.getItem("email");

//     useEffect(() => {
//       // Check if email is not present in local storage, then redirect to login page
//       if (alreadymail) {
//           navigate('/dashboard');
//       }
//   }, [email]);




//     axios.defaults.withCredentials = true;
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.warn("calling");
//         // axios.post('https://server-sb2a.onrender.com', {email, password})
//         axios.post('http://localhost:3002/login', {email, password})
//         .then(res => {
//           // navigate('/dashboard')
//           console.warn(res.data);
//           if (res.data.Status === "Success"){
//             console.warn("Login Success");
//             navigate('/homepage');
//             localStorage.setItem("email", email);
//             const date = new Date();
//             console.warn(date.getUTCDate(), date.getTime());
//             const data = {
//               email,
//               loginTime:""+date.getUTCHours()+" "+date.getMinutes(),
//               loginDate:date.getDate()+" "+date.getMonth()+" "+date.getFullYear()

//             }
//             axios.post('http://localhost:3002/updateUserData', {email, loginTime:""+date.getUTCHours()+" "+date.getMinutes(), loginDate:date.getDate()+" "+date.getMonth()+" "+date.getFullYear() })
//           }
//           else{
//             console.warn("Password is incorrect or mail not found");
//             alert("Password is incorrect or mail not found");
//           }
//       }).catch(err=> console.log(err))
//     }



//   return(<>
//     <Navbar />
//     <div className="d-flex  justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-1/2">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//            <div className="mb-3">
//                <label htmlform="email">
//                  <strong>Email</strong>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter Email"
//                   autoComplete="off"
//                   name="email"
//                   className="form-control rounded-0"
//                   onChange={(e) =>  setEmail(e.target.value)}
//                 />
//              </div>
//              <div className="mb-3">
//                 <label htmlform="email">
//                   <strong>Password</strong>
//                 </label>
//                 <input
//                    type="password"
//                    placeholder="Enter Password"
//                    name="password"
//                    className="form-control rounded-0"
//                    onChange={(e) =>  setPassword(e.target.value)}
//                 />
//              </div>

//              <button type="submit" className="btn btn-primary  rounded-0">
//                 Login
//              </button>
//              </form>
//              <p>Already Have an Account</p>
//              <Link to="/register" className="btn btn-default border  bg-light rounded-0 text-decoration-none">
//                 Signup
//              </Link>  
//           </div>
//         </div>
//         </>
//        );
//     }
    
// export default Login;                   