import Dropdown from '@/components/Dropdown'
import SearchBar from '@/components/SearchBar'
import TBPagination from '@/components/TBPagination'
import { DropdownValue } from '@/components/type/types-common'
import { IMAGES } from '@/constants/images'
import AttractionItem from '../../components/AttractionItem'

const ReccomendAttractionList = () => {
  const listRecomendItem = {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/dsutqg1fy/image/upload/v1730033193/REC_02_dvlk42.png',
    continent: 'Asia',
    country: 'China',
  }

  const handleSelectType = (item: DropdownValue) => {
    console.log(item.value)
  }

  const handleSelectSort = (item: DropdownValue) => {
    console.log(item.value)
  }

  const options = [
    {
      id: '1',
      value: 'Option 1',
    },
    {
      id: '2',
      value: 'Option 2',
    },
    {
      id: '3',
      value: 'Option 3',
    },
  ]

  return (
    <div className="">
      <div className="relative h-screen overflow-hidden">
        <img
          src={IMAGES.REC_01}
          alt="a"
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="px-40 text-6xl font-bold text-white">
              Discovering the wonders of our planet, one adventure at a time
            </h1>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-16">
        <div className="mt-16">
          <SearchBar placeholder="Search for destinations" />
        </div>
        <div className="flex justify-between py-8">
          <div className="w-1/2 pr-4">
            <label className="block font-medium" htmlFor="">
              {'Filter by continents of destination'}
              <div className="w-full">
                <Dropdown
                  options={options}
                  onSelect={handleSelectType}
                  placeholder="Filter by continents of destination"
                />
              </div>
            </label>
          </div>
          <div className="w-1/2 pl-4">
            <label className="block font-medium" htmlFor="">
              {'Sort by'}
              <div className="w-full">
                <Dropdown
                  options={options}
                  onSelect={handleSelectSort}
                  placeholder="Sort by"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-12">
        {[...Array(12)].map((_) => {
          return (
            <div key={_} className="w-1/3 px-4 pt-8">
              <AttractionItem
                imageUrl={listRecomendItem.imageUrl}
                continent={listRecomendItem.continent}
                country={listRecomendItem.country}
              />
            </div>
          )
        })}
      </div>
      <div className="py-20">
        <TBPagination />
      </div>
    </div>
  )
}

export default ReccomendAttractionList
