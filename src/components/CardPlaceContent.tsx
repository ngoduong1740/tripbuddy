import StarRating from './StarRating'
import { CardContent } from './ui/card'

interface DestinationContent {
  imageUrl: string
  location: string
  title: string
  description: string
  ratingValue: number | null
  onClick: () => void
}

const CardPlaceContent = ({ ...props }: DestinationContent) => {
  return (
    <CardContent className="flex flex-row flex-wrap justify-between mb-6 h-1/4 font-urbanist">
      <div className="flex-[0.4] min-w-[300px] min-h-[300px]">
        <img
          className="h-full rounded-lg"
          src={props.imageUrl}
          alt={props.location}
        />
      </div>
      <div className="flex flex-col flex-[0.55] justify-between min-h-[300px] min-w-[300px]">
        <div className="flex-[0.8]">
          <p className="text-sm py-2">{props.location}</p>
          <h3 className="text-xl font-bold text-[#397D54]">{props.title}</h3>
          <p className="text-sm h-80 overflow-y-auto my-2 font-urbanist">
            {props.description}
          </p>
        </div>
        <div className="flex justify-between flex-[0.2]">
          {typeof props.ratingValue === 'number' &&
            !Number.isNaN(props.ratingValue) && (
              <StarRating readOnly initialRating={props.ratingValue} />
            )}
          <button
            type="button"
            className="max-w-max text-base font-semibold text-[#397D54]"
            onClick={() => props.onClick()}
          >
            Click to rate
          </button>
        </div>
      </div>
    </CardContent>
  )
}

export default CardPlaceContent
