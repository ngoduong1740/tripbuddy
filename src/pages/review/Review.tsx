import PrimaryHeader from '@/components/PrimaryHeader'
import { CardHeader } from '@/components/ui/card'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CreateReviewForm from './CreateReviewForm'
import ReviewList from './ReviewList'

const Review = () => {
  const location = useLocation()
  const state = location.state

  const [isReview, setIsReview] = useState(state)

  const hanleWriteClick = () => {
    setIsReview(!isReview)
  }

  return (
    <div className="font-urbanist my-10">
      <PrimaryHeader
        title="Share your Travel Experience in form of a story"
        description={null}
        searchPlaceholder="What would you like to review?"
      />
      <div className="px-12">
        <CardHeader className="flex flex-row justify-between">
          <div className="">
            <h2 className="text-2xl font-bold font-serif text-[#397D54]">
              {isReview
                ? 'Top places with reviews'
                : 'Let us know your adventure'}
            </h2>
            <p className="text-[#404040]">
              Travelers want to see more reviews of these places.
            </p>
          </div>
          {isReview || (
            <button
              type="button"
              className="flex items-center rounded-3xl font-medium border-[#397D54] border-2 px-6 text-[#397D54] font-urbanist"
              onClick={hanleWriteClick}
            >
              <img
                className="mr-2"
                src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729737902/pencil_xihzns.svg"
                alt="pencil"
              />
              {'Write New Review'}
            </button>
          )}
        </CardHeader>
        {isReview ? (
          <CreateReviewForm onClick={hanleWriteClick} />
        ) : (
          <ReviewList onClick={hanleWriteClick} />
        )}
      </div>
    </div>
  )
}

export default Review
