import './App.css'
import Chart from './HighchartsGraphs/HC_Spline_Demo'
import Register from './page/Register'
import Login from './page/LogIn'

import { BrowserRouter, Routes, Route, } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Redirect from base URL to /login 
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/chart" element={<HC_Spline_Demo />} />*/}
         <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
