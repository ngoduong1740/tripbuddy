import UserStats from '@/components/UserStats'
import { Button } from '@/components/ui/button'
import React, { useRef } from 'react'

const UpdateMember: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="space-y-2">
            <p className="font-urbanist font-medium text-[#000000] text-[16px]">
              First Name:
            </p>
            <input
              className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
              type="text"
              defaultValue="Alexa"
            />
          </div>
          <div className="space-y-2">
            <p className="font-urbanist font-medium text-[#000000] text-[16px]">
              Last Name:
            </p>
            <input
              className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
              type="text"
              defaultValue="Rawles"
            />
          </div>
          <div className="space-y-2">
            <p className="font-urbanist font-medium text-[#000000] text-[16px]">
              Location:
            </p>
            <input
              className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
              type="text"
              defaultValue="Viet Nam"
            />
          </div>
          <div className="space-y-2">
            <p className="font-urbanist font-medium text-[#000000] text-[16px]">
              Mobile Number:
            </p>
            <input
              className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
              type="number"
              defaultValue="0123456789"
            />
          </div>
          <div className="space-y-2">
            <p className="font-urbanist font-medium text-[#000000] text-[16px]">
              Email:
            </p>
            <input
              className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
              type="text"
              defaultValue="Alexa@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <p className="font-urbanist font-medium text-[#000000] text-[16px]">
              Date Of Birth:
            </p>
            <input
              className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
              type="date"
              defaultValue="01/01/1111"
            />
          </div>
          <div className="space-y-2">
            <p className="font-urbanist font-medium text-[#000000] text-[16px]">
              Location:
            </p>
            <input
              className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
              type="text"
              defaultValue="Quy Nhon"
            />
          </div>
          <div className="space-y-2">
            <p className="font-urbanist font-medium text-[#000000] text-[16px]">
              Status:
            </p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                defaultChecked={true}
              />
              <div className="w-14 h-8 bg-[#D1D5DB] rounded-full peer peer-focus:ring-0 peer-focus:ring-[#397D54] peer-checked:bg-[#397D54] transition-colors duration-200 ease-in-out mt-2" />
              <span className="absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out transform peer-checked:translate-x-6 mt-2 ml-1" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateMember
