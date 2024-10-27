import SearchDialog from '@/components/SearchDialog'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { IMAGES } from '@/constants/images'
import { ROUTES_OF_WHITE_BACKGROUND_PAGE } from '@/constants/route-constants'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavItem {
  label: string
  path: string
}

interface NavigationBarProps {
  navItems: NavItem[]
  isLoggedIn: boolean
  onLogin: () => void
  onLogout: () => void
  onSignUp: () => void
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  navItems,
  isLoggedIn,
  onLogin,
  onLogout,
  onSignUp,
}) => {
  const location = useLocation()
  const isOnWhiteBackground = ROUTES_OF_WHITE_BACKGROUND_PAGE.includes(
    location.pathname
  )

  const renderNavItem = (item: NavItem) => {
    const navItemClass = isOnWhiteBackground
      ? 'px-4 py-2 font-urbanist font-bold rounded-full text-[#397D54] transition duration-300 hover:bg-[#397D54]/20'
      : 'px-4 py-2 font-urbanist font-bold rounded-full text-white transition duration-300 hover:bg-white/20'
    return (
      <NavigationMenuItem key={item.label}>
        <NavigationMenuLink asChild>
          <Link to={item.path} className={navItemClass}>
            {item.label}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
  }

  const renderAuthButtons = () => {
    const buttonClass = isOnWhiteBackground
      ? 'rounded-full font-urbanist font-bold text-[#397D54] bg-transparent hover:bg-[#397D54]/20'
      : 'rounded-full font-urbanist font-bold text-white bg-transparent hover:bg-white/20'
    const loginButtonClass = isOnWhiteBackground
      ? 'rounded-full bg-[#397D54] px-9 py-2 font-urbanist font-bold text-white hover:bg-green-800'
      : 'rounded-full bg-white px-9 py-2 font-urbanist font-bold text-black hover:bg-gray-300'

    return isLoggedIn ? (
      <Button onClick={onLogout} className={buttonClass}>
        Logout
      </Button>
    ) : (
      <>
        <Button onClick={onSignUp} className={buttonClass}>
          Sign Up
        </Button>
        <Button onClick={onLogin} className={loginButtonClass}>
          Login
        </Button>
      </>
    )
  }

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="w-full flex items-center justify-between py-4 px-24">
        {/* Logo Section */}
        <div className="flex w-1/5 justify-start">
          <Link to="/">
            <img
              src={isOnWhiteBackground ? IMAGES.logo_green : IMAGES.logo_white}
              alt="Logo"
              className="-mt-5 h-20 w-20"
            />
          </Link>
        </div>

        {/* Navigation Section */}
        <NavigationMenu className="w-3/5 block">
          <NavigationMenuList className="space-x-16">
            {navItems.map((item) => renderNavItem(item))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Buttons Section */}
        <div className="w-1/5 items-center flex justify-between">
          <SearchDialog color={isOnWhiteBackground ? '#397D54' : '#FFFFFF'} />
          {renderAuthButtons()}
        </div>
      </div>
    </header>
  )
}

export default NavigationBar
