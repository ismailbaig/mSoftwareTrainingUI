import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login/Login'
import Home from './Home/Home'
import Contact from './contact/contact'
import About from './About/About'

function App() {

  return (
    <>
     <BrowserRouter>
          {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
         </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
