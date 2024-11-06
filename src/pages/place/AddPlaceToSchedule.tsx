import AttractionItem from '@/components/AttractionItem'
import SearchBar from '@/components/SearchBar'
import TBPagination from '@/components/TBPagination'
import TPDropdownList from '@/components/TPDropdownList'
import { IMAGES } from '@/constants/images'

const AddPlaceToSchedule = () => {
  const listRecomendItem = {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/dsutqg1fy/image/upload/v1730033193/REC_02_dvlk42.png',
    continent: 'Asia',
    country: 'China',
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

  const handleSelectType = () => {}

  const handleAddClick = () => {
    console.log('Add to schedule')
  }

  return (
    <div>
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
              The more you choose <br />
              The more you fun
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-16 mx-16 flex justify-between items-end">
          <div className="w-2/5">
            <SearchBar placeholder="Search for destinations" />
          </div>
          <div className="">
            <TPDropdownList
              label="Sort by"
              options={options}
              onSelect={handleSelectType}
              placeholder="Most Popular"
            />
          </div>
        </div>
        <div className="px-12 flex flex-wrap mt-8">
          {[...Array(12)].map((_) => {
            return (
              <div key={_} className="w-1/3 px-4 pt-8">
                <AttractionItem
                  imageUrl={listRecomendItem.imageUrl}
                  continent={listRecomendItem.continent}
                  country={listRecomendItem.country}
                  action="Add"
                  onClick={handleAddClick}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="py-20">
        <TBPagination />
      </div>
    </div>
  )
}

export default AddPlaceToSchedule
