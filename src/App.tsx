import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login/Login'
import Home from './Home/Home'
import Contact from './contact/contact'

function App() {

  return (
    <>
     <BrowserRouter>
          {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
         </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
