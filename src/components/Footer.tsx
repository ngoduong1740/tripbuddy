import { IMAGES } from '@/constants/images'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="max-h-[250px] bg-[#397D54] py-4 text-white sm:py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <img
            src={IMAGES.logo_white}
            alt="TripBuddy Logo"
            className="mb-3 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-[100px] lg:w-[100px]"
          />
          <p className="max-w-2xl text-center font-urbanist text-lg font-semibold sm:text-base md:text-lg">
            &copy; {new Date().getFullYear()} TripBuddy. All rights reserved.
            Powered By TripBuddy Team
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
