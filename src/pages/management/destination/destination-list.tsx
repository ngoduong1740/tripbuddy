import SearchBar from '@/components/SearchBar'
import TBPagination from '@/components/TBPagination'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const destinations = [
  {
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Bluenose',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
    status: '+4%',
  },
  {
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Pennywise',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
    status: '-8%',
  },
  {
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Flotsam',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
    status: '+19%',
  },
  {
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Gregautsch',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
    status: '',
  },
  {
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'ElPistolero',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
    status: '-6%',
  },
  {
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Siuuuuuuu',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
    status: '+7%',
  },
]

const ListDestination = () => {
  const navigate = useNavigate()

  return (
    <div className="container max-w-7xl mx-auto px-8 py-8 mt-8 text-center font-urbanist">
      <h1 className="text-[55px] font-extrabold text-[#397D54] font-urbanist mb-6 mt-8">
        List Destination
      </h1>
      <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />

      <div className="flex items-center mb-8 font-urbanist">
        <div className="w-4/5 mx-auto">
          <SearchBar placeholder="Search Destination" />
        </div>

        <button
          type="button"
          onClick={() => navigate('/destinations/create')}
          className="bg-[#397D54] text-white mr-12 px-4 py-2 rounded-full shadow-lg hover:bg-[#2a5b40] transition duration-200 font-semibold ml-1"
        >
          Create
        </button>
      </div>

      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/4 font-semibold text-[#397D54] text-[18px]">
              Destination
            </th>
            <th className="px-4 py-2 w-1/4 font-semibold text-[#397D54] text-[18px]">
              Description
            </th>
            <th className="px-4 py-2 w-1/4 font-semibold text-[#397D54] text-[18px]">
              Specific Location
            </th>
            <th className="px-4 py-2 w-1/4 font-semibold text-[#397D54] text-[18px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((dest) => (
            <tr key={`${dest.name}-${dest.location}`} className="text-center">
              <td className="px-4 py-4 border-b flex ml-10 font-urbanist font-bold text-[18px]">
                {dest.img && (
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-16 h-16 object-cover rounded-full mr-2"
                  />
                )}
                <span className="mt-6">{dest.name}</span>
              </td>

              <td className="px-4 py-4 border-b">
                <span className="px-2 py-1 font-urbanist">
                  {dest.description}
                </span>
              </td>

              <td className="px-4 py-4 border-b">
                <div className="flex items-center justify-center font-urbanist">
                  <span>{dest.location}</span>
                </div>
              </td>

              <td className="px-4 py-4 border-b">
                <button
                  type="button"
                  onClick={() => navigate('/destinations/update')}
                  className="bg-[#397D54] text-white px-4 py-1 rounded-full mr-2 font-urbanist font-semibold"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-[#A65959] text-white px-4 py-1 rounded-full font-urbanist font-semibold"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-10">
        <TBPagination />
      </div>
    </div>
  )
}

export default ListDestination
