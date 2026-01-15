import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function AppHeader() {
  const [user] = useState({ name: 'User' }) // Replace with actual user state
  
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-xl font-bold">
              MyApp
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span>Hello, {user.name}</span>
            <Link to="/settings" className="text-blue-600">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
