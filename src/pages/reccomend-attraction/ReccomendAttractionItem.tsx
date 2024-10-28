import { CardContent } from '@/components/ui/card'
import React from 'react'

interface ReccomendAttractionItemProps {
  imageUrl: string
  continent: string
  country: string
}

const ReccomendAttractionItem: React.FC<ReccomendAttractionItemProps> = ({
  ...props
}) => {
  return (
    <CardContent className="flex-col font-Urbanist">
      <img className="rounded-3xl" src={props.imageUrl} alt={props.country} />
      <div className="py-1">
        <p className="text-[#5B5B5B] text-sm">{props.continent}</p>
        <p className="text-[#000000] text-base font-bold">{props.country}</p>
      </div>
    </CardContent>
  )
}

export default ReccomendAttractionItem
