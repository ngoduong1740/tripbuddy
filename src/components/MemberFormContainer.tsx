import MemberForm from '@/components/MemberForm'
import ProfileImageUploader from '@/components/ProfileImageUploader'
import { Button } from '@/components/ui/button'
import React, { useRef, useState } from 'react'

interface MemberFormContainerProps {
  title: string
  buttonText: string
  initialData: {
    firstName: string
    lastName: string
    location: string
    mobileNumber: string
    email: string
    dateOfBirth: string
    status?: boolean
  }
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MemberFormContainer: React.FC<MemberFormContainerProps> = ({
  title,
  buttonText,
  initialData,
  onInputChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <div className="container mx-auto px-6 py-8 mt-16">
      <h1 className="text-[55px] text-center font-extrabold text-[#397D54] font-urbanist mb-6">
        {title}
      </h1>
      <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />
      <div className="w-[80%] mx-auto p-6 bg-[#FFFFFF] rounded-lg shadow-lg mt-[20px] mb-20 border-[#397D54]">
        <div className="flex items-center justify-between mb-6 mt-2">
          <ProfileImageUploader
            imageSrc={profileImage || 'https://via.placeholder.com/150'}
            onButtonClick={handleClick}
            onFileChange={handleFileChange}
            fileInputRef={fileInputRef}
          />
          <Button
            size="default"
            className="rounded-[14px] bg-[#397D54] w-32 h-11 hover:bg-[#27633F]"
          >
            <div className="font-urbanist text-[#FFFFFF] font-bold text-[16px]">
              {buttonText}
            </div>
          </Button>
        </div>
        <MemberForm
          firstName={initialData.firstName}
          lastName={initialData.lastName}
          location={initialData.location}
          mobileNumber={initialData.mobileNumber}
          email={initialData.email}
          dateOfBirth={initialData.dateOfBirth}
          profileImage={profileImage || ''}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  )
}

export default MemberFormContainer
