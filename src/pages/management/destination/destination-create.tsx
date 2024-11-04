import DestinationPage from '@/components/DestinationPage'
import React from 'react'

const CreateDestination: React.FC = () => {
  const handleSave = (data: {
    imageSrc: string | null
    destination: string
    description: string
    specificPlaces: string
  }) => {
    console.log('New Destination:', data)
  }

  return <DestinationPage title="Create New Destination" onSave={handleSave} />
}

export default CreateDestination
