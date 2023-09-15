import Login from './components/Login'
import Signup from './components/signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Homepage from './components/Homepage'

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

export default App;
