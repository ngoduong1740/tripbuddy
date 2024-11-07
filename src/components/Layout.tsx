import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar />
      <main className="mx-auto w-full flex-grow">{children || <Outlet />}</main>
      <Footer />
    </div>
  )
}

export default Layout
