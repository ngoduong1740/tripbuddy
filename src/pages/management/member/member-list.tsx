import ManagementTable from '@/components/ManagementTable'
import SearchBar from '@/components/SearchBar'
import TBPagination from '@/components/TBPagination'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface Member {
  id: string
  img: string
  name: string
  description: string
  location: string
}

const members: Member[] = [
  {
    id: '1',
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'TripBuddy',
    description: 'tripbuddy@gmail.com',
    location: 'Ép Pi Ti',
  },
  {
    id: '2',
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'TripBuddy',
    description: 'tripbuddy@gmail.com',
    location: 'Ép Pi Ti',
  },
]

const columns = [
  { Header: 'Name', accessor: 'name' as const },
  { Header: 'Email', accessor: 'description' as const },
  { Header: 'Location', accessor: 'location' as const },
  { Header: 'Actions', accessor: 'actions' as const },
]

const ListMember = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleEditClick = (id: string) => {
    navigate('/members/update')
  }

  return (
    <div className="container max-w-7xl mx-auto px-8 py-8 mt-8 text-center font-urbanist">
      <h1 className="text-[55px] font-extrabold text-[#397D54] font-urbanist mb-6 mt-8">
        List Member
      </h1>
      <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />

      <div className="flex items-center mb-8 font-urbanist">
        <div className="w-4/5 mx-auto focus: ring-0 focus:ring-[#397D54]">
          <SearchBar placeholder="Search Member" />
        </div>

        <button
          type="button"
          onClick={() => navigate('/members/create')}
          className="bg-[#397D54] text-white mr-12 px-4 py-2 rounded-full shadow-lg hover:bg-[#2a5b40] transition duration-200 font-semibold ml-1"
        >
          Create
        </button>
      </div>

      <ManagementTable
        columns={columns}
        items={members}
        onEdit={handleEditClick}
      />

      <div className="mt-10">
        <TBPagination />
      </div>
    </div>
  )
}

export default ListMember
