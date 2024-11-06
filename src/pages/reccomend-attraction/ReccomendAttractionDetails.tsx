import { DropdownValue } from '@/components/type/types-common'
import { IMAGES } from '@/constants/images'
import AttractionItem from '../../components/AttractionItem'
import './reccomendattractiondetails.css'
import TPBorderlineButton from '@/components/TPBorderlineButton'
import TPDropdownList from '@/components/TPDropdownList'
import DestinationItem from '../destinations/DestinationItem'
import CardContentComponent from './CardContentComponent'
import ReccomendCardHeader from './ReccomendCardHeader'

const ReccomendAttractionDetails = () => {
  const attraction = 'Croatia'
  const listRecomendItem = {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/dsutqg1fy/image/upload/v1730033193/REC_02_dvlk42.png',
    country: 'China',
  }

  const handleSelectType = (item: DropdownValue) => {
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

  const destinationItems = {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/dsutqg1fy/image/upload/v1729835219/DES_04_xvmtpn.png',
    place: 'Hawaii, United States',
    publishDate: 'Feb 27, 2023',
    timeRead: '8 min read',
    title: 'The Best Time to visit Hawaii',
    description:
      'I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. ',
  }

  const hanleViewAllClick = (): void => {}

  const attractionGridItems = [...Array(12)].map((_) => {
    return (
      <div key={_} className="w-1/3 px-4 pt-8">
        <AttractionItem
          imageUrl={listRecomendItem.imageUrl}
          continent={null}
          country={listRecomendItem.country}
        />
      </div>
    )
  })

  const filterDropdown = (
    <TPDropdownList
      label="Filter option"
      options={options}
      onSelect={handleSelectType}
      placeholder="Filter option"
    />
  )

  return (
    <div className="font-Urbanist">
      <div className="relative h-screen overflow-hidden">
        <img
          src={IMAGES.RECD_01}
          alt="a"
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 duration-300 group-hover:bg-black/30" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[17rem] leading-normal text-outline font-black text-stroke">
              {attraction.toUpperCase()}
            </h1>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <section className="flex-col justify-center items-center text-center max-w-4xl font-urbanist p-4 mt-28 mx-auto">
          <h1 className="text-8xl font-bold text-[#397D54] mb-6">
            {attraction}
          </h1>
          <p className="text-4xl font-medium text-[#5B5B5B] mb-6">Europe</p>
          <p className="text-2xl font-medium text-black">
            Croatia is a fun destination with a wide range of attractions,
            including beautiful coastal cities, stunning national parks,
            charming seaside towns, and picturesque islands. The country offers
            a rich history and culture, with ancient ruins, impressive
            architecture, and a vibrant cultural scene.{' '}
          </p>
        </section>
      </div>
      <div className="px-24">
        <ReccomendCardHeader
          LeftComponent={
            <CardContentComponent
              label="01 / TOP SIGHTS & LOCATIONS"
              title="Top Locations for your Travel Plans"
            />
          }
          RightComponent={filterDropdown}
        />
        <div className="flex flex-wrap -mx-4">{attractionGridItems}</div>
      </div>
      <div className="py-24 flex justify-center items-center">
        <TPBorderlineButton
          label="View All Top Places"
          onClick={() => hanleViewAllClick}
        />
      </div>
      <div className="px-24">
        <ReccomendCardHeader
          LeftComponent={
            <CardContentComponent
              label="02 / LATEST FEATURED STORIES"
              title={`Latest Stories from ${attraction}`}
            />
          }
          RightComponent={filterDropdown}
        />
        <div className="flex -mx-4">
          {[...Array(3)].map(() => {
            return (
              <div key={destinationItems.id} className="w-1/2 px-3">
                <DestinationItem
                  imageUrl={destinationItems.imageUrl}
                  place={destinationItems.place}
                  publishDate={destinationItems.publishDate}
                  timeRead={destinationItems.timeRead}
                  title={destinationItems.title}
                  description={destinationItems.description}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="px-24">
        <ReccomendCardHeader
          LeftComponent={
            <CardContentComponent
              label={`03 / OTHER FUN PLACES IN ${attraction.toUpperCase()}`}
              title={` Other Fun Places in ${attraction}`}
            />
          }
          RightComponent={
            <TPDropdownList
              label="Filter option"
              options={options}
              onSelect={handleSelectType}
              placeholder="Filter option"
            />
          }
        />
        <div className="flex flex-wrap -mx-4">{attractionGridItems}</div>
      </div>
      <div className="py-24 flex justify-center items-center">
        <TPBorderlineButton
          label="View All Top Places"
          onClick={() => hanleViewAllClick}
        />
      </div>
    </div>
  )
}

export default ReccomendAttractionDetails
