import HeroSection from '@/components/HeroSection'
import TBPagination from '@/components/TBPagination'
import { CardHeader } from '@/components/ui/card'
import { IMAGES } from '@/constants/images'
import DestinationItem from './DestinationItem'

const Destinations = () => {
  const heroSectionTitle = 'Travel Stories from different people globally'
  const heroSections = [
    {
      image: IMAGES.DES_01,
      title: 'Fun Trip to the Pyramid of Giza, Egypt',
      onIconClick: () => console.log('Northern Lights clicked'),
    },
    {
      image: IMAGES.DES_02,
      title: 'Unmissable places to visit on your next Travel to Jamaica',
      onIconClick: () => console.log('Mountains clicked'),
    },
    {
      image: IMAGES.DES_03,
      title: 'Fun fact about Bay of Islands, New Zealand',
      onIconClick: () => console.log('Coral Reef clicked'),
    },
  ]

  const destinationItems = [
    {
      id: '1',
      imageUrl:
        'https://res.cloudinary.com/dsutqg1fy/image/upload/v1729835219/DES_04_xvmtpn.png',
      place: 'Hawaii, United States',
      publishDate: 'Feb 27, 2023',
      timeRead: '8 min read',
      title: 'The Best Time to visit Hawaii',
      description:
        'I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. ',
    },
    {
      id: '2',
      imageUrl:
        'https://res.cloudinary.com/dsutqg1fy/image/upload/v1729835219/DES_05_xeueud.png',
      place: 'Puerto Rico, United States',
      publishDate: 'Feb 27, 2023',
      timeRead: '5 min read',
      title: '10 ways to see Puerto Rico on a budget',
      description:
        'I had just graduated from college and decided to take a six-month solo trip across Europe before starting my career. I backpacked through 15 different countries, staying in hostels and meeting people.',
    },
    {
      id: '3',
      imageUrl:
        'https://res.cloudinary.com/dsutqg1fy/image/upload/v1729835219/DES_04_xvmtpn.png',
      place: 'San Antonio, Texas',
      publishDate: 'Feb 27, 2023',
      timeRead: '8 min read',
      title: '6 Best Day Trip to San Antonio, Texas',
      description:
        'It was a beautiful spring morning when I arrived in Kathmandu, the capital city of Nepal. As soon as I stepped out of the airport, I was struck by the vibrant colors, the chaos of the streets.',
    },
  ]

  const hanleWriteClick = () => {}

  // Technology Partners Section
  return (
    <div className="my-6">
      <HeroSection sections={heroSections} mainTitle={heroSectionTitle} />
      <div className="px-12">
        <CardHeader className="flex flex-row justify-between my-4">
          <div className="">
            <h2 className="text-2xl font-bold font-urbanist text-[#397D54]">
              Top Destination
            </h2>
            <p className="text-[#404040]">
              Explore more exciting destination with us
            </p>
          </div>
          <button
            type="button"
            className="flex items-center rounded-3xl font-medium border-[#397D54] border-2 px-6 text-[#397D54] font-urbanist"
            onClick={hanleWriteClick}
          >
            View All Destinations
          </button>
        </CardHeader>
        <div className="flex flex-wrap px-10">
          {destinationItems.map((item) => {
            return (
              <div key={item.id} className="w-1/2 px-2">
                <DestinationItem
                  imageUrl={item.imageUrl}
                  place={item.place}
                  publishDate={item.publishDate}
                  timeRead={item.timeRead}
                  title={item.title}
                  description={item.description}
                />
              </div>
            )
          })}
        </div>
        <div className="py-6">
          <TBPagination />
        </div>
      </div>
    </div>
  )
}

export default Destinations
