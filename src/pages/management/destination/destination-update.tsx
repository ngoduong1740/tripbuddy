import DestinationPage from '@/components/DestinationPage'
import React from 'react'

const UpdateDestination: React.FC = () => {
  const handleSave = (data: {
    imageSrc: string | null
    destination: string
    description: string
    specificPlaces: string
  }) => {
    console.log('Updated Destination:', data)
  }

  return <DestinationPage title="Update Destination" onSave={handleSave} />
}

export default UpdateDestination
