import ManagementTable from '@/components/ManagementTable'
import SearchBar from '@/components/SearchBar'
import TBPagination from '@/components/TBPagination'
import { useNavigate } from 'react-router-dom'

interface Destination {
  id: string
  img: string
  name: string
  description: string
  location: string
}

const destinations: Destination[] = [
  {
    id: '1',
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Bluenose',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
  },
  {
    id: '2',
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Pennywise',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
  },
  {
    id: '3',
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Bluenose',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
  },
  {
    id: '4',
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Pennywise',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
  },
  {
    id: '5',
    img: 'https://tinyurl.com/mvsye7ff',
    name: 'Bluenose',
    description: 'OKe, gấc xin đẹp tuỵt vờiii',
    location: 'Ép Pi Ti',
  },
]

const columns: Array<{
  Header: string
  accessor: keyof Destination | 'actions'
}> = [
  { Header: 'Destination', accessor: 'name' },
  { Header: 'Description', accessor: 'description' },
  { Header: 'Specific Location', accessor: 'location' },
  { Header: 'Actions', accessor: 'actions' },
]

const ListDestination = () => {
  const navigate = useNavigate()

  const handleEditClick = () => {
    navigate('/destinations/update')
  }

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

      <ManagementTable
        columns={columns}
        items={destinations}
        onEdit={handleEditClick}
      />

      <div className="mt-10">
        <TBPagination />
      </div>
    </div>
  )
}

export default ListDestination
