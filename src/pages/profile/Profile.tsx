import UserStats from '@/components/UserStats'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
  const navigate = useNavigate()

  const handleEditClick = () => {
    navigate('/profile/edit')
  }

  return (
    <div className="w-[80%] mx-auto p-6 bg-[#FFFFFF] rounded-lg shadow-lg mt-[100px] mb-20 border-t-[70px] border-[#397D54]">
      <div className="flex items-center justify-between mb-6 mt-2">
        <div className="flex items-center space-x-6">
          <img
            className="w-56 h-56 rounded-full border-4 border-[#397D54] object-cover mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
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
          className="rounded-[14px] bg-[#397D54] w-32 h-11 hover:bg-[#27633f]"
          onClick={handleEditClick}
        >
          <div className="font-urbanist text-[#FFFFFF] font-bold text-[16px]">
            Edit
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
            value="Alexa"
            disabled
          />
        </div>
        <div className="space-y-2">
          <p className="font-urbanist font-medium text-[#000000] text-[16px]">
            Last Name:
          </p>
          <input
            className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
            type="text"
            value="Rawles"
            disabled
          />
        </div>
        <div className="space-y-2">
          <p className="font-urbanist font-medium text-[#000000] text-[16px]">
            Location:
          </p>
          <input
            className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
            type="text"
            value="Viet Nam"
            disabled
          />
        </div>
        <div className="space-y-2">
          <p className="font-urbanist font-medium text-[#000000] text-[16px]">
            Mobile Number:
          </p>
          <input
            className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
            type="number"
            value="0123456789"
            disabled
          />
        </div>
      </div>

      <UserStats />
    </div>
  )
}

export default Profile
