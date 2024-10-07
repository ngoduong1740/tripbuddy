import React from 'react'

import Footer from './Footer'
import NavigationBar from './NavigationBar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
        onLogin={() => console.log('Login clicked')}
        onLogout={() => console.log('Logout clicked')}
        onSignUp={() => console.log('Sign up clicked')}
      />
      <main className="mx-auto w-full flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
