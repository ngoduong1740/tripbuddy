import React from 'react'

interface MemberFormProps {
  firstName: string
  lastName: string
  location: string
  mobileNumber: string
  email: string
  dateOfBirth: string
  profileImage: string
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MemberForm: React.FC<MemberFormProps> = ({
  firstName,
  lastName,
  location,
  mobileNumber,
  email,
  dateOfBirth,
  profileImage,
  onInputChange,
}) => {
  // Adding unique IDs for each field
  const fields = [
    {
      id: 'firstName',
      label: 'First Name',
      value: firstName,
      name: 'firstName',
      type: 'text',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      value: lastName,
      name: 'lastName',
      type: 'text',
    },
    {
      id: 'location',
      label: 'Location',
      value: location,
      name: 'location',
      type: 'text',
    },
    {
      id: 'mobileNumber',
      label: 'Mobile Number',
      value: mobileNumber,
      name: 'mobileNumber',
      type: 'tel',
    },
    { id: 'email', label: 'Email', value: email, name: 'email', type: 'email' },
    {
      id: 'dateOfBirth',
      label: 'Date Of Birth',
      value: dateOfBirth,
      name: 'dateOfBirth',
      type: 'date',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
      {fields.map((field) => (
        <div className="space-y-2" key={field.id}>
          <label className="font-urbanist font-medium text-[#000000] text-[16px]">
            {field.label}:
            <input
              className="w-full p-3 border-[#F9F9F9] rounded-lg bg-[#F9F9F9] font-urbanist text-[#397D54] font-semibold text-[18px]"
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={onInputChange}
            />
          </label>
        </div>
      ))}
    </div>
  )
}

export default MemberForm
