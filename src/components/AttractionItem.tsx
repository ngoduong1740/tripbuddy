import { CardContent } from '@/components/ui/card'
import React from 'react'

interface AttractionItemProps {
  imageUrl: string
  continent: string | null
  country: string
}

const AttractionItem: React.FC<AttractionItemProps> = ({ ...props }) => {
  return (
    <CardContent className="flex-col font-Urbanist">
      <img className="rounded-3xl" src={props.imageUrl} alt={props.country} />
      <div className="py-1">
        {props.continent && (
          <p className="text-[#5B5B5B] text-sm">{props.continent}</p>
        )}
        <p className="text-[#000000] text-base font-bold">{props.country}</p>
      </div>
    </CardContent>
  )
}

export default AttractionItem
