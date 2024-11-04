import DestinationForm from '@/components/DestinationForm'
import React, { useState } from 'react'

interface DestinationPageProps {
  title: string
  onSave: (data: {
    imageSrc: string | null
    destination: string
    description: string
    specificPlaces: string
  }) => void
}

const DestinationPage: React.FC<DestinationPageProps> = ({ title, onSave }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [destination, setDestination] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [specificPlaces, setSpecificPlaces] = useState<string>('')

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

  const handleSave = () => {
    onSave({
      imageSrc,
      destination,
      description,
      specificPlaces,
    })
  }

  return (
    <div className="container mx-auto px-6 py-8 mt-16 max-w-5xl">
      <h1 className="text-[55px] text-center font-extrabold text-[#397D54] font-urbanist mb-6">
        {title}
      </h1>
      <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />

      <DestinationForm
        imageSrc={imageSrc}
        onImageUpload={handleImageUpload}
        triggerFileInput={triggerFileInput}
        destination={destination}
        setDestination={setDestination}
        description={description}
        setDescription={setDescription}
        specificPlaces={specificPlaces}
        setSpecificPlaces={setSpecificPlaces}
        onSave={handleSave}
      />
    </div>
  )
}

export default DestinationPage
