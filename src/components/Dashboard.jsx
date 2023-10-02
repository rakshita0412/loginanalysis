import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from "./Navbar";
import Dynamictable from "./Dynamictable"; 


function Dashboard() {
    //const [suc, setSuc ] = useState()
    const navigate = useNavigate()
    //axios.defaults.withCredentials = true;
    const admin = localStorage.getItem("admin");
    
    const [email, setEmail] = useState('');
    



    useEffect(() => {
      // Check if email is not present in local storage, then redirect to login page
      if (admin!="available") {
          navigate('/');
      }
  }, [admin]);


 
  const [userData, setUserData] = useState()

   const handleEmailChange = async(e) => {
             e.preventDefault()
     try {
          const response = await axios.post('http://localhost:3002/getUserData',{email})
          console.warn(response.data);
          console.warn(response.data.success);
          if (response.data.success) {
            const formattedUserData = response.data.userData;
            console.log('Formatted User Data:', formattedUserData);
             setUserData(formattedUserData);
          } else {
            console.error('Error fetching user data:', response.data.error);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
   };

  

  return (
    <>
        <Navbar />
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="w-50">
            <input
             type="email"
             placeholder="Enter Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleEmailChange}>Fetch</button>

                {/* Render the DynamicTable component */}
                <Dynamictable data = {userData} email = {email}  />
               </div>
        </div>
    </>
);
}




export default Dashboard;