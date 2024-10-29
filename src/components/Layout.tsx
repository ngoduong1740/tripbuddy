import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const navItems = [
    { label: 'Destinations', path: '/destinations' },
    { label: 'Schedules', path: '/schedules' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'About Us', path: '/about' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar
        navItems={navItems}
        isLoggedIn={false}
        onLogin={() => navigate('/login')}
        onLogout={() => navigate('/')}
        onSignUp={() => navigate('/signup')}
      />
      <main className="mx-auto w-full flex-grow">{children || <Outlet />}</main>
      <Footer />
    </div>
  )
}

export default Layout
