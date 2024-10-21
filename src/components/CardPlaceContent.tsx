import { Link } from 'react-router-dom'
import { CardContent } from './ui/card'

interface DestinationContent {
  imageUrl: string
  location: string
  title: string
  description: string
  linkContent: string
  linkTarget: string
}

const CardPlaceContent = ({ ...props }: DestinationContent) => {
  return (
    <CardContent className="flex flex-row flex-wrap justify-between px-12 mb-6 h-1/4">
      <div className="flex-[0.4] min-w-[300px] min-h-[300px]">
        <img
          className="h-full rounded-lg"
          src={props.imageUrl}
          alt={props.location}
        />
      </div>
      <div className="flex flex-col flex-[0.55] justify-between min-h-[300px] min-w-[300px]">
        <div className="flex-[0.8]">
          <p className="text-sm font-serif py-2">{props.location}</p>
          <h3 className="text-xl font-bold font-serif text-[#397D54]">
            {props.title}
          </h3>
          <p className="text-sm font-serif h-80 overflow-y-auto my-2">
            {props.description}
          </p>
        </div>
        <Link
          className="flex items-center max-w-max text-base font-semibold font-serif text-[#397D54] flex-[0.2]"
          to={props.linkTarget}
        >
          {props.linkContent}
        </Link>
      </div>
    </CardContent>
  )
}

export default CardPlaceContent
