import React from 'react'

interface Partner {
  name: string
  logo: string
}

interface TechnologyPartnersProps {
  partners: Partner[]
  title: string
}

const TechnologyPartners: React.FC<TechnologyPartnersProps> = ({
  partners,
  title,
}) => {
  return (
    <section className="px-24 py-24">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center font-urbanist text-2xl font-bold text-[#397D54]">
          {title}
        </h2>
        <div className="flex items-center justify-center space-x-40">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyPartners
