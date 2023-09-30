import Login from './components/Login'
import Signup from './components/signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Homepage from './components/Homepage'
import Admin from './components/Admin'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect,useState } from 'react'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/homepage' element={<Homepage />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App;
