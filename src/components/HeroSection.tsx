import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface Section {
  image: string
  title: string
  onIconClick: () => void
}

interface HeroSectionProps {
  sections: Section[]
  mainTitle: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ sections, mainTitle }) => {
  const gridCols =
    sections.length <= 3 ? `grid-cols-${sections.length}` : 'grid-cols-3'

  return (
    <section className="relative h-screen overflow-hidden">
      <div className={`absolute inset-0 grid ${gridCols}`}>
        {sections.map((section) => (
          <Card
            key={section.title}
            className="group relative overflow-hidden rounded-none border-none"
          >
            <div
              style={{ backgroundImage: `url(${section.image})` }}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-10">
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              <Button
                size="icon"
                onClick={section.onIconClick}
                className="rounded-full bg-transparent p-4 text-white transition-colors duration-300 hover:bg-white/20"
              >
                <ArrowRight size={30} strokeWidth={3} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="px-40 text-6xl font-bold text-white">{mainTitle}</h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
