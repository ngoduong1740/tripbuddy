import MemberFormContainer from '@/components/MemberFormContainer'
import React, { useState } from 'react'

const UpdateMember: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'Alexa',
    lastName: 'Rawles',
    location: 'Viet Nam',
    mobileNumber: '0123456789',
    email: 'Alexa@gmail.com',
    dateOfBirth: '1111-01-01',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <MemberFormContainer
      title="Update Member"
      buttonText="Save"
      initialData={formData}
      onInputChange={handleInputChange}
    />
  )
}

export default UpdateMember
