import { CardContent } from '@/components/ui/card'
import { IMAGES } from '@/constants/images'

interface BlogPostCardProps {
  imageUrl: string
  place: string
  publishDate: string
  readTime: string
  title: string
  description: string
  onReadMore?: () => void
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  imageUrl,
  place,
  publishDate,
  readTime,
  title,
  description,
  onReadMore,
}) => {
  return (
    <CardContent className="flex-col mb-14">
      <div>
        <img className="rounded-3xl w-full h-auto" src={imageUrl} alt={place} />
      </div>

      <div className="flex justify-between py-1 text-[#5B5B5B]">
        <div>
          <p>{place}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p>{publishDate}</p>
          <div className="w-2 h-2 rounded-full bg-[#767676] mt-1" />
          <p>{readTime}</p>
        </div>
      </div>

      <div className="py-1">
        <h3 className="text-xl font-bold text-[#397D54] py-1">{title}</h3>
        <p className="py-1 h-24 overflow-y-auto">{description}</p>
      </div>

      <div>
        <button
          type="button"
          onClick={onReadMore}
          className="flex items-center max-w-max text-base font-semibold text-[#397D54]"
        >
          Read Full Post
          {''}
          <img className="p-2" src={IMAGES.vector_logo} alt="arrow" />
        </button>
      </div>
    </CardContent>
  )
}

export default BlogPostCard
