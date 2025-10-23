import './App.css'

import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom'
import Login from './LoginAndRegister/Login'
import Users from './User/Users'
import HC_Spline_Demo from './HighchartsGraphs/HC_Spline_Demo'
import Register from './LoginAndRegister/Register'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Redirect from base URL to /login */ }
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/chart" element={<HC_Spline_Demo />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
