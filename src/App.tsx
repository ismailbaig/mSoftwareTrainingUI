import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './LoginAndRegister/Login';
import Register from './LoginAndRegister/Register';
import Users from './User/Users';
import StudentsPage from './pages/StudentsPage';
import ProfilePage from './pages/ProfilePage';
import Marks from './marks/Marks';

function App() {
  // ✅ Get role from localStorage (set after login)
  const role = localStorage.getItem("role") || "NORMAL";

  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Other pages */}
        <Route path="/users" element={<Users />} />

        {/* Role-based routing */}
        {role === "ADMIN" ? (
          <Route path="/students" element={<StudentsPage />} />
        ) : (
          <Route path="/students" element={<Navigate to="/profile" />} />
        )}

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/marks" element={<Marks role="ADMIN" email="someone@someemail.com" />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
