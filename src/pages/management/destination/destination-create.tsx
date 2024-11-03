import React, { useState } from 'react'

const CreateDestination: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageSrc(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    document.getElementById('fileInput')?.click()
  }

  return (
    <div className="container mx-auto px-6 py-8 mt-16 max-w-5xl">
      <h1 className="text-[55px] text-center font-extrabold text-[#397D54] font-urbanist mb-6">
        Create New Destination
      </h1>
      <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />

      <div className="flex flex-col md:flex-row items-start mt-12">
        <div className="flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0">
          <div className="bg-gray-200 w-80 h-60 rounded-lg flex items-center justify-center">
            <button
              type="button"
              onClick={triggerFileInput}
              className="flex flex-col items-center"
            >
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <img
                  className="w-20 h-20"
                  src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729598282/camera_black_bfz1eu.svg"
                  alt="camera-icon"
                />
              )}
            </button>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 md:pl-8">
          <div className="mb-4">
            <label
              htmlFor="destination"
              className="block text-[#000000] font-semibold mb-2 font-urbanist text-[16px]"
            >
              Destination:
            </label>
            <input
              id="destination"
              type="text"
              placeholder="Country/City"
              className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#397D54] ring-0 focus:ring-[#397D54] font-urbanist"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-[#000000] font-semibold mb-2 font-urbanist text-[16px]"
            >
              Description:
            </label>
            <textarea
              id="description"
              placeholder="A detailed description of destination"
              className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#397D54] ring-0 focus:ring-[#397D54] font-urbanist"
              rows={4}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="specificPlaces"
              className="block text-[#000000] font-semibold mb-2 font-urbanist text-[16px]"
            >
              Specific places:
            </label>
            <input
              id="specificPlaces"
              type="text"
              placeholder="Some best places in this destination"
              className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#397D54] ring-0 focus:ring-[#397D54] font-urbanist"
            />
          </div>

          <button
            type="button"
            className="w-2/6 font-bold mt-4 py-2 bg-[#397D54] text-white rounded-full hover:bg-[#378757] transition duration-200 font-urbanist"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateDestination
