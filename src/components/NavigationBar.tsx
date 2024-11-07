import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { IMAGES } from '@/constants/images'
import { ROUTES_OF_WHITE_BACKGROUND_PAGE } from '@/constants/route-constants'
import { authService } from '@/services/api'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import UserHeader from './UserHeader'

interface NavItem {
  label: string
  path: string
}

const NavigationBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isLoggedIn = authService.isAuthenticated()

  const navItems = [
    { label: 'Destinations', path: '/destinations' },
    { label: 'Schedules', path: '/schedules' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'About Us', path: '/about' },
  ]
  const isOnWhiteBackground = ROUTES_OF_WHITE_BACKGROUND_PAGE.includes(
    location.pathname
  )
  const adaptiveColor = isOnWhiteBackground ? '#397D54' : '#FFFFFF'

  const handleClickLogin = () => {
    navigate('/login')
  }

  const handleClickLogOut = () => {
    authService.logout()
    navigate('/')
  }

  const handleClickSignUp = () => {
    navigate('/signup')
  }

  const handleClickNotiIcon = () => {
    navigate('/notification')
  }

  const handleClickProfile = () => {
    navigate('/profile')
  }

  const handleClickQna = () => {
    navigate('/qna')
  }

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

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="w-full flex items-center justify-between py-4 px-24">
        <div className="flex w-1/5 justify-start">
          <Link to="/">
            <img
              src={isOnWhiteBackground ? IMAGES.logo_green : IMAGES.logo_white}
              alt="Logo"
              className="-mt-5 h-20 w-20"
            />
          </Link>
        </div>

        <NavigationMenu className="w-3/5 block">
          <NavigationMenuList className="space-x-16">
            {navItems.map((item) => renderNavItem(item))}
          </NavigationMenuList>
        </NavigationMenu>

        <UserHeader
          isOnWhiteBackground={isOnWhiteBackground}
          adaptiveColor={adaptiveColor}
          isLoggedIn={isLoggedIn}
          onLogin={handleClickLogin}
          onLogout={handleClickLogOut}
          onSignUp={handleClickSignUp}
          onClickProfile={handleClickProfile}
          onClickQna={handleClickQna}
          onClickNotiIcon={handleClickNotiIcon}
        />
      </div>
    </header>
  )
}

export default NavigationBar
