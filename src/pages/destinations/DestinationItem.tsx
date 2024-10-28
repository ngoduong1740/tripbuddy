import { CardContent } from '@/components/ui/card'
import { IMAGES } from '@/constants/images'

interface DestinationItemProps {
  imageUrl: string
  place: string
  publishDate: string
  timeRead: string
  title: string
  description: string
}

const DestinationItem: React.FC<DestinationItemProps> = ({ ...props }) => {
  return (
    <CardContent className="flex-col mb-14">
      <div className="">
        <img className="rounded-3xl" src={props.imageUrl} alt={props.place} />
      </div>
      <div className="flex justify-between py-1 text-[#5B5B5B]">
        <div className="">
          <p>{props.place}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p>{props.publishDate}</p>
          <div className="w-[8px] h-[8px] rounded-3xl bg-[#767676] mt-1" />
          <p>{props.timeRead}</p>
        </div>
      </div>
      <div className="py-1">
        <h3 className="text-xl font-bold text-[#397D54] py-1">{props.title}</h3>
        <p className="py-1 h-24 overflow-y-auto">{props.description}</p>
      </div>
      <div className="">
        <button
          type="button"
          className="flex items-center max-w-max text-base font-semibold text-[#397D54]"
        >
          {'Read Full Post'}
          <img className="p-2" src={IMAGES.vector_logo} alt="vector" />
        </button>
      </div>
    </CardContent>
  )
}

export default DestinationItem
