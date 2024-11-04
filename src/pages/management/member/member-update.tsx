import MemberForm from '@/components/MemberForm'
import UserStats from '@/components/UserStats'
import { Button } from '@/components/ui/button'
import React, { useRef, useState } from 'react'

const UpdateMember: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [formData, setFormData] = useState({
    firstName: 'Alexa',
    lastName: 'Rawles',
    location: 'Viet Nam',
    mobileNumber: '0123456789',
    email: 'Alexa@gmail.com',
    dateOfBirth: '1111-01-01',
  })

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imgElement = document.getElementById(
          'profileImage'
        ) as HTMLImageElement
        if (imgElement) {
          imgElement.src = e.target?.result as string
        }
      }
      reader.readAsDataURL(files[0])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="container mx-auto px-6 py-8 mt-16">
      <h1 className="text-[55px] text-center font-extrabold text-[#397D54] font-urbanist mb-6">
        Update Member
      </h1>
      <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />
      <div className="w-[80%] mx-auto p-6 bg-[#FFFFFF] rounded-lg shadow-lg mt-[20px] mb-20 border-[#397D54]">
        <div className="flex items-center justify-between mb-6 mt-2">
          <div className="flex items-center space-x-6">
            <div className="relative w-56 h-56 mb-4">
              <div className="absolute inset-0 bg-black opacity-50 rounded-full" />
              <img
                id="profileImage"
                className="w-56 h-56 rounded-full border-4 border-[#397D54] object-cover mb-4"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <button
                type="button"
                onClick={handleClick}
                className="absolute inset-0 m-auto text-white px-4 py-2 rounded-full hover:bg-[#27633F] w-max h-max"
              >
                <img
                  className="w-16 h-16"
                  src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729532329/material-symbols_camera-enhance_udlpds.svg"
                  alt="Camera Icon"
                />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>

          <Button
            size="default"
            className="rounded-[14px] bg-[#397D54] w-32 h-11 hover:bg-[#27633F]"
          >
            <div className="font-urbanist text-[#FFFFFF] font-bold text-[16px]">
              Save
            </div>
          </Button>
        </div>

        <MemberForm
          firstName={formData.firstName}
          lastName={formData.lastName}
          location={formData.location}
          mobileNumber={formData.mobileNumber}
          email={formData.email}
          dateOfBirth={formData.dateOfBirth}
          profileImage={''}
          onInputChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default UpdateMember
