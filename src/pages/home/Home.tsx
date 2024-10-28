import TechnologyPartners from '@/components/TechnologyPartners'
import { IMAGES } from '@/constants/images'
import React from 'react'

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

  return (
    <>
      <HeroSection sections={heroSections} mainTitle={heroSectionTitle} />
      <TechnologyPartners partners={partners} title={technologyPartnersTitle} />
    </>
  )
}

export default Home
