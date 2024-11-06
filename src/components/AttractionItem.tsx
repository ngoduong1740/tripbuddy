import { CardContent } from '@/components/ui/card'
import React from 'react'

interface AttractionItemProps {
  imageUrl: string
  continent: string | null
  country: string
  action?: string
  onClick?: () => void
}

const AttractionItem: React.FC<AttractionItemProps> = ({ ...props }) => {
  return (
    <CardContent className="flex-col font-Urbanist">
      <img className="rounded-3xl" src={props.imageUrl} alt={props.country} />
      <div className="py-1">
        {props.continent && (
          <p className="text-[#5B5B5B] text-sm">{props.continent}</p>
        )}
        <div className="flex justify-between items-end">
          <p className="text-[#000000] text-base font-bold">{props.country}</p>
          {props.action && (
            <button
              type="button"
              className="font-urbanist rounded-3xl bg-[#397D54] py-1 px-3 text-[#FFFFFF]"
              onClick={props.onClick}
            >
              {props.action}
            </button>
          )}
        </div>
      </div>
    </CardContent>
  )
}

export default AttractionItem
