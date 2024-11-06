import MemberFormContainer from '@/components/MemberFormContainer'
import React, { useState } from 'react'

const CreateMember: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'Alexa',
    lastName: 'Rawles',
    location: 'Viet Nam',
    mobileNumber: '0123456789',
    email: 'Alexa@gmail.com',
    dateOfBirth: '1111-01-01',
    status: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <MemberFormContainer
      title="Create New Member"
      buttonText="Create"
      initialData={formData}
      onInputChange={handleInputChange}
    />
  )
}

export default CreateMember
