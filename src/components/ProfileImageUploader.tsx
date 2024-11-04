import React, { RefObject } from 'react'

interface ProfileImageUploaderProps {
  imageSrc: string
  onButtonClick: () => void
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  fileInputRef: RefObject<HTMLInputElement>
}

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({
  imageSrc,
  onButtonClick,
  onFileChange,
  fileInputRef,
}) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="relative w-56 h-56 mb-4">
        <div className="absolute inset-0 bg-black opacity-50 rounded-full" />
        <img
          id="profileImage"
          className="w-56 h-56 rounded-full border-4 border-[#397D54] object-cover mb-4"
          src={imageSrc || 'https://via.placeholder.com/150'}
          alt="Profile"
        />
        <button
          type="button"
          onClick={onButtonClick}
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
          onChange={onFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>
    </div>
  )
}

export default ProfileImageUploader
