import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IMAGES } from '@/constants/images'
import { Bell, LogOut, Settings, User } from 'lucide-react'
import SearchDialog from './SearchDialog'

const UserHeader = ({
  isOnWhiteBackground = false,
  adaptiveColor,
  isLoggedIn = false,
  onLogin,
  onLogout,
  onSignUp,
  onClickQna,
  onClickProfile,
  onClickNotiIcon,
}: {
  isOnWhiteBackground: boolean
  adaptiveColor: string
  isLoggedIn: boolean
  onLogin: () => void
  onLogout: () => void
  onSignUp: () => void
  onClickQna: () => void
  onClickProfile: () => void
  onClickNotiIcon: () => void
}) => {
  const signUpButtonClass = isOnWhiteBackground
    ? 'rounded-full font-urbanist font-bold text-[#397D54] bg-transparent hover:bg-[#397D54]/20'
    : 'rounded-full font-urbanist font-bold text-white bg-transparent hover:bg-white/20'
  const loginButtonClass = isOnWhiteBackground
    ? 'rounded-full bg-[#397D54] px-9 py-2 font-urbanist font-bold text-white hover:bg-green-800'
    : 'rounded-full bg-white px-9 py-2 font-urbanist font-bold text-black hover:bg-gray-300'

  return (
    <div className="w-1/5 items-center flex justify-between">
      {isLoggedIn ? (
        <div className="flex items-center justify-between w-full px-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <div className="flex items-center">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src={IMAGES.avatar_default} alt="Avatar" />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 ml-3">
                  <p
                    className={`text-sm font-bold leading-none text-[${adaptiveColor}]`}
                  >
                    Ngô Dương
                  </p>
                  <p
                    className={`text-left text-sm font-medium text-[${adaptiveColor}]`}
                  >
                    User
                  </p>
                </div>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" side="bottom" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={onClickProfile}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer" onClick={onClickQna}>
                <Settings className="mr-2 h-4 w-4" />
                <span>QnA</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="cursor-pointer text-red-600"
                onClick={onLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full bg-[${adaptiveColor}] hover:bg-[${adaptiveColor}]`}
            onClick={onClickNotiIcon}
          >
            {isOnWhiteBackground ? (
              <Bell color="#FFFFFF" />
            ) : (
              <Bell color="#397D54" />
            )}
          </Button>
        </div>
      ) : (
        <>
          <SearchDialog color={adaptiveColor} />
          <Button onClick={onSignUp} className={signUpButtonClass}>
            Sign Up
          </Button>
          <Button onClick={onLogin} className={loginButtonClass}>
            Login
          </Button>
        </>
      )}
    </div>
  )
}

export default UserHeader
