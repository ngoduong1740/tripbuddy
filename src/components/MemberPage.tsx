import React, { useState } from 'react'

interface MemberPageProps {
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
  onSubmit: (data: MemberPageProps['initialData']) => void
}

const MemberPage: React.FC<MemberPageProps> = ({
  title,
  buttonText,
  initialData,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(initialData)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="container mx-auto px-6 py-8 mt-16">
      <h1 className="text-[55px] text-center font-extrabold text-[#397D54] font-urbanist mb-6">
        {title}
      </h1>
      <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />
      <div className="w-[80%] mx-auto p-6 bg-[#FFFFFF] rounded-lg shadow-lg mt-[20px] mb-20 border-[#397D54]">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          {formData.status !== undefined && (
            <div className="mb-6">
              <label className="block text-gray-700" htmlFor="status">
                Status
              </label>
              <input
                type="checkbox"
                id="status"
                name="status"
                checked={formData.status}
                onChange={handleInputChange}
                className="mr-2 leading-tight"
              />
              <span className="text-gray-700">Active</span>
            </div>
          )}
          <button
            type="submit"
            className="bg-[#397D54] text-white font-bold rounded-lg px-4 py-2"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default MemberPage
