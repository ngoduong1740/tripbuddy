import React from 'react'

interface DestinationFormProps {
  imageSrc: string | null
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
  triggerFileInput: () => void
  destination: string
  setDestination: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  specificPlaces: string
  setSpecificPlaces: React.Dispatch<React.SetStateAction<string>>
  onSave: () => void
}

const DestinationForm: React.FC<DestinationFormProps> = ({
  imageSrc,
  onImageUpload,
  triggerFileInput,
  destination,
  setDestination,
  description,
  setDescription,
  specificPlaces,
  setSpecificPlaces,
  onSave,
}) => {
  return (
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
            onChange={onImageUpload}
          />
        </div>
      </div>

      <div className="w-full md:w-2/3 md:pl-8">
        <div className="mb-4">
          <label
            htmlFor="destination"
            className="block text-[#000000] font-semibold mb-2"
          >
            Destination:
          </label>
          <input
            id="destination"
            type="text"
            value={destination}
            placeholder="Country/City"
            onChange={(e) => setDestination(e.target.value)}
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#397D54] ring-0 focus:ring-[#397D54]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-[#000000] font-semibold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            placeholder="A detailed description of the destination"
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#397D54] ring-0 focus:ring-[#397D54]"
            rows={4}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="specificPlaces"
            className="block text-[#000000] font-semibold mb-2"
          >
            Specific places:
          </label>
          <input
            id="specificPlaces"
            type="text"
            value={specificPlaces}
            placeholder="Some best places in this destination"
            onChange={(e) => setSpecificPlaces(e.target.value)}
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#397D54] ring-0 focus:ring-[#397D54]"
          />
        </div>

        <button
          type="button"
          onClick={onSave}
          className="w-2/6 font-bold mt-4 py-2 bg-[#397D54] text-white rounded-full hover:bg-[#378757] transition duration-200"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default DestinationForm
