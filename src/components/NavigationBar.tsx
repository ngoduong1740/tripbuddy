import SearchDialog from '@/components/SearchDialog'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { IMAGES } from '@/constants/images'
import { Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

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
  const renderNavItem = (item: NavItem, mobile: boolean = false) => {
    return (
      <NavigationMenuItem key={item.label} className={mobile ? 'w-full' : ''}>
        <NavigationMenuLink asChild>
          <Link
            to={item.path}
            className={`px-4 py-2 font-urbanist font-bold ${
              mobile
                ? 'block w-full text-black'
                : 'rounded-full text-white transition duration-300 hover:bg-white/20'
            }`}
          >
            {item.label}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
  }

  const renderAuthButtons = (mobile: boolean = false) => {
    const buttonClass = mobile
      ? 'w-full justify-start font-urbanist font-bold text-black bg-transparent hover:bg-transparent'
      : 'rounded-full font-urbanist font-bold text-white bg-transparent hover:bg-white/20'

    return isLoggedIn ? (
      <Button onClick={onLogout} className={buttonClass}>
        Logout
      </Button>
    ) : (
      <>
        <Button onClick={onSignUp} className={buttonClass}>
          Sign Up
        </Button>
        <Button
          onClick={onLogin}
          className={
            mobile
              ? buttonClass
              : 'rounded-full bg-white px-9 py-2 font-urbanist font-bold text-primary hover:bg-gray-300'
          }
        >
          Login
        </Button>
      </>
    )
  }

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-24">
        {/* Logo Section */}
        <div className="flex w-1/4 justify-start">
          <Link to="/">
            <img
              src={IMAGES.logo_white}
              alt="Logo"
              className="h-12 w-12 md:-mt-5 md:h-20 md:w-20"
            />
          </Link>
        </div>

        {/* Navigation Section - Desktop */}
        <NavigationMenu className="hidden w-1/2 md:block">
          <NavigationMenuList className="space-x-4 md:space-x-16">
            {navItems.map((item) => renderNavItem(item))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Buttons Section - Desktop */}
        <div className="hidden w-1/4 items-center space-x-2 md:flex md:space-x-8">
          <SearchDialog />
          {renderAuthButtons()}
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 md:hidden">
          <SearchDialog />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:bg-white/20"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="hidden">
                  Sheet Description
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-4">
                <NavigationMenu orientation="vertical" className="w-full">
                  <NavigationMenuList className="flex w-full flex-col space-y-2">
                    {navItems.map((item) => renderNavItem(item, true))}
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="flex w-full flex-col space-y-2">
                  {renderAuthButtons(true)}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default NavigationBar
