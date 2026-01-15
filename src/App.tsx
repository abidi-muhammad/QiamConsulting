import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/client/Home'
import Services from './pages/client/Services'
import About from './pages/client/About'
import Contact from './pages/client/Contact'
import Dashboard from "./pages/Dashboard"
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Welcome from './pages/Welcome'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
