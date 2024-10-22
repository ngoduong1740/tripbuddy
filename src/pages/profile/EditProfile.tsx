import { Button } from '@/components/ui/button'
import React from 'react'

const EditProfile: React.FC = () => {
  return (
    <div className="w-[80%] mx-auto p-6 bg-[#FFFFFF] rounded-lg shadow-lg mt-[100px] mb-20 border-t-[70px] border-[#397D54]">
      <div className="flex items-center justify-between mb-6 mt-2">
        <div className="flex items-center space-x-6">
          <div className="relative w-56 h-56 mb-4">
            <div className="absolute inset-0 bg-black opacity-50 rounded-full" />
            <img
              className="w-56 h-56 rounded-full border-4 border-[#397D54] object-cover mb-4"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <button
              type="button"
              className="absolute inset-0 m-auto text-white px-4 py-2 rounded-full hover:bg-[#27633F] w-max h-max"
            >
              <img
                className="w-16 h-16"
                src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729532329/material-symbols_camera-enhance_udlpds.svg"
                alt="Camera Icon"
              />
            </button>
          </div>
          <div>
            <h2 className="text-[30px] font-bold font-urbanist">
              Alexa Rawles
            </h2>
            <p className="text-[#000000] opacity-50 text-[20px] font-urbanist">
              alexarawles@gmail.com
            </p>
          </div>
        </div>

        <Button
          size="default"
          className="rounded-[14px] bg-[#397D54] w-32 h-11 hover:bg-[#27633F]"
        >
          <div className="font-urbanist text-[#FFFFFF] font-bold text-[16px]">
            Submit
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
      </div>

      <div className="flex justify-center items-center space-x-4 gap-16">
        <div className="text-center">
          <p className="font-urbanist text-[#000000] font-bold text-[20px]">
            Reward Points
          </p>
          <span className="font-urbanist text-[#397D54] font-bold text-[22px]">
            360
          </span>
        </div>
        <div className="border-l-2 border-[#EAEAEA] h-24 hidden md:block" />
        <div className="text-center">
          <p className="font-urbanist text-[#000000] font-bold text-[20px]">
            Schedules
          </p>
          <span className="font-urbanist text-[#397D54] font-bold text-[22px]">
            238
          </span>
        </div>
        <div className="border-l-2 border-[#EAEAEA] h-24 hidden md:block" />
        <div className="text-center">
          <p className="font-urbanist text-[#000000] font-bold text-[20px]">
            History
          </p>
          <span className="font-urbanist text-[#397D54] font-bold text-[22px]">
            473
          </span>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
