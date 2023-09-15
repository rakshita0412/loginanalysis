import Login from '../src/components/Login'
import Signup from '../src/components/signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from '../src/components/Dashboard'
import Homepage from '../src/components/Homepage'

function App() {
  
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

export default App
