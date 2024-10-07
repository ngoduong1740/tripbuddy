import React from 'react'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">About Trip Buddy</h1>
      <p className="mb-4">This is a simple React project created with Vite.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Home
      </Link>
    </div>
  )
}

export default About
