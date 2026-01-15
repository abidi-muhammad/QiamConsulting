import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientHome from './pages/client/home'
import ClientServices from './pages/client/services'
import ClientAbout from './pages/client/about'
import ClientContact from './pages/client/contact'
import Dashboard from "./pages/dashboard"
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Welcome from './pages/welcome'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={

            <ClientHome />

        } />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/services" element={
            <ClientServices />
        } />
        <Route path="/about" element={
            <ClientAbout />
        } />
        <Route path="/contact" element={
            <ClientContact />
        } />
        
        {/* Dashboard */}
        <Route path="/dashboard" element={
            <Dashboard />
        } />
        
        {/* Auth (without AppLayout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
