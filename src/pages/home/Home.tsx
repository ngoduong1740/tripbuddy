import TechnologyPartners from '@/components/TechnologyPartners'
import { IMAGES } from '@/constants/images'
import React from 'react'

import BlogPostCard from '@/components/BlogPostCard'
import {
  FeaturedSection,
  FeaturedSectionHeader,
} from '@/components/FeaturedSection'
import TBPagination from '@/components/TBPagination'
import { Button } from '@/components/ui/button'
import { CardHeader } from '@/components/ui/card'
import { generateId } from '@/utils/id'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import HeroSection from '../../components/HeroSection'

const Home: React.FC = () => {
  // Hero Section
  const heroSectionTitle =
    'Discover New Places and Create Unforgettable Memories'
  const heroSections = [
    {
      image: IMAGES.image_1,
      title: 'Why you should reconsider The Inca Trail, Peru Trip',
      onIconClick: () => console.log('Northern Lights clicked'),
    },
    {
      image: IMAGES.image_2,
      title: 'The Hidden Powers of The Northern Lights, Iceland',
      onIconClick: () => console.log('Mountains clicked'),
    },
    {
      image: IMAGES.image_3,
      title: '10 Facts you didn’t know about The Blue Hole, Belize',
      onIconClick: () => console.log('Coral Reef clicked'),
    },
  ]

  // Technology Partners Section
  const technologyPartnersTitle = 'A PROJECT FROM TRIP BUDDY GROUP'
  const partners = [
    { name: 'Android', logo: IMAGES.android },
    { name: 'Java', logo: IMAGES.java },
    { name: 'FPT University', logo: IMAGES.fptu },
    { name: 'C#', logo: IMAGES.csharp },
    { name: 'Microsoft .NET', logo: IMAGES.dotnet },
  ]

  // Top Destinations
  const topDestinationsData = {
    header: {
      title: 'Best Destination',
      description: 'The Most Suitable Places For You',
      rightContent: (
        <Button
          variant="outline"
          className="rounded-3xl font-semibold border-[#397D54] text-md border p-6 text-[#397D54] bg-transparent hover:text-[#397D54]"
        >
          View All Destinations
        </Button>
      ),
    },
    items: [
      {
        id: generateId(),
        title: 'Croatia',
        imageUrl: IMAGES.croatia,
      },
      {
        id: generateId(),
        title: 'Morocco',
        imageUrl: IMAGES.morocco,
      },
      {
        id: generateId(),
        title: 'Mexico',
        imageUrl: IMAGES.mexico,
      },
    ],
  }

  // All Popular Places
  const allPopularPlacesData = {
    header: {
      title: 'All Popular Places',
      description: 'The Most Visited Places  From All Over The World',
      rightContent: (
        <div className="space-x-4">
          <Button
            size="icon"
            className="rounded-full bg-[#397D54] hover:opacity-80 disabled:bg-[#CDCCCC]"
            disabled
          >
            <ArrowLeft />
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-[#397D54] hover:opacity-80 disabled:bg-[#CDCCCC]"
          >
            <ArrowRight />
          </Button>
        </div>
      ),
    },
    items: [
      {
        id: generateId(),
        title: 'Burj Khalifa',
        subtitle: 'Dubai, UAE',
        imageUrl: IMAGES.burj_khalifa,
      },
      {
        id: generateId(),
        title: 'Published On Main',
        subtitle: 'Vancouver, Canada',
        imageUrl: IMAGES.published_on_main,
      },
      {
        id: generateId(),
        title: 'The Hot Springs of Baños',
        subtitle: 'Baños de Agua Santa, Ecuador',
        imageUrl: IMAGES.the_hot_springs_of_banos,
      },
    ],
  }

  // Places based on search
  const placesBasedOnSearch = {
    header: {
      title: 'Places based on search',
      description: 'Check out fun places based on your searches',
      rightContent: (
        <div className="space-x-4">
          <Button
            size="icon"
            className="rounded-full bg-[#397D54] hover:opacity-80 disabled:bg-[#CDCCCC]"
            disabled
          >
            <ArrowLeft />
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-[#397D54] hover:opacity-80 disabled:bg-[#CDCCCC]"
          >
            <ArrowRight />
          </Button>
        </div>
      ),
    },
    items: [
      {
        id: generateId(),
        title: 'The Shibuya',
        subtitle: 'Tokyo, Japan',
        imageUrl: IMAGES.shibuya,
      },
      {
        id: generateId(),
        title: 'The Colosseum',
        subtitle: 'Rome, Italy',
        imageUrl: IMAGES.colosseum,
      },
      {
        id: generateId(),
        title: 'The Blyde River Canyon',
        subtitle: 'Capetown, South Africa',
        imageUrl: IMAGES.blyde_river_canyon,
      },
    ],
  }

  // Top Travel Stories
  const topTravelStories = [
    {
      id: '1',
      imageUrl:
        'https://res.cloudinary.com/dsutqg1fy/image/upload/v1729835219/DES_04_xvmtpn.png',
      place: 'Hawaii, United States',
      publishDate: 'Feb 27, 2023',
      readTime: '8 min read',
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
      readTime: '5 min read',
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
      readTime: '8 min read',
      title: '6 Best Day Trip to San Antonio, Texas',
      description:
        'It was a beautiful spring morning when I arrived in Kathmandu, the capital city of Nepal. As soon as I stepped out of the airport, I was struck by the vibrant colors, the chaos of the streets.',
    },
  ]

  return (
    <div>
      <div>
        <HeroSection sections={heroSections} mainTitle={heroSectionTitle} />
      </div>
      <div>
        <TechnologyPartners
          partners={partners}
          title={technologyPartnersTitle}
        />
      </div>
      <div className="px-24 mb-20">
        <FeaturedSection {...topDestinationsData} />
      </div>
      <div className="px-24 mb-20">
        <FeaturedSection {...allPopularPlacesData} />
      </div>
      <div className="px-24 mb-20">
        <FeaturedSection {...placesBasedOnSearch} />
      </div>
      <div className="px-24 mb-20">
        <CardHeader>
          <FeaturedSectionHeader
            title="Top Travel Stories"
            description="Explore our latest stories we reccomend to you"
            rightContent={
              <Button
                variant="outline"
                className="rounded-3xl font-semibold border-[#397D54] text-md border p-6 text-[#397D54] bg-transparent hover:text-[#397D54]"
              >
                View All Stories
              </Button>
            }
          />
        </CardHeader>
        <div className="flex flex-wrap -mx-4">
          {topTravelStories.map((item) => {
            return (
              <div key={item.id} className="w-1/2 px-3">
                <BlogPostCard
                  imageUrl={item.imageUrl}
                  place={item.place}
                  publishDate={item.publishDate}
                  readTime={item.readTime}
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

export default Home
