import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from "./Navbar";

function Dashboard() {
    //const [suc, setSuc ] = useState()
    const navigate = useNavigate()
    //axios.defaults.withCredentials = true;
    const admin = localStorage.getItem("admin");

    
    // useEffect(() => {
    //     axios.get('http://localhost:3001/dashboard')
    //     .then(res => {
    //         console.log("dashboard: " + res.data);
    //         if(res.data === "Success") {
    //              setSuc("Successed OK")
    //         } else {
    //              navigate('/')
    //         }
    //     }).catch(err=> console.log(err))
    // }, [navigate]);

    const [allUsers, setAllUsers] = useState([]);



    useEffect(() => {
      // Check if email is not present in local storage, then redirect to login page
      if (admin!="available") {
          navigate('/');
      }
  }, [admin]);






// useEffect(() => {
//    console.warn(email); 
//   axios.post('http://localhost:3002/getUserData',{ email })
//     .then((response) => {
//       console.warn(response.data);
//       setAllUsers(response.data);
//     })
//     .catch((err) => console.log(err));
// }, []);



  
    return(<>
      <Navbar/>
      <div className = "w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="w-50"> 
        <table className="table">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {
              allUsers.map(user => {
              return <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              })
            }
          </tbody>
        </table>
        </div>
      </div>
      </>
    );
}

export default Dashboard;