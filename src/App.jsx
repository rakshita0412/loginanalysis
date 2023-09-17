import Login from './components/Login'
import Signup from './components/signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Homepage from './components/Homepage'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect,useState } from 'react'

function App() {
  const[allusers, setAllUsers] = useState() 
  useEffect(() => {
    axios.get('https://localhost:3001/getUsers')
    .then((data) => {console.warn(data);setAllUsers(data)})
    .catch(err=> console.log(err))
  }, [])

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
  )
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App;
