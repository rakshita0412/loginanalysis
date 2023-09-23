

import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Dashboard() {
    const [suc, setSuc ] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const email = localStorage.getItem("email");
    
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
   console.warn(email); 
  axios.post('http://localhost:3001/getUserData',{email})
    .then((response) => {
      console.warn(response.data);
      setAllUsers(response.data);
    })
    .catch((err) => console.log(err));
}, []);

  
    return(
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
            {/* {
              allusers.map(user => {
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              })
            } */}
          </tbody>
        </table>
        </div>
      </div>
    );
}

export default Dashboard;