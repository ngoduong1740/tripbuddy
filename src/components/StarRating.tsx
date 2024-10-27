import { useState } from 'react'

interface StarRatingProps {
  initialRating?: number // Optional initial rating
  onChange?: (rating: number) => void // Callback when rating changes
  readOnly?: boolean // Disable interaction
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  onChange,
  readOnly = false,
}) => {
  const [rating, setRating] = useState(initialRating)
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleClick = (value: number) => {
    if (!readOnly) {
      setRating(value)
      if (onChange) {
        onChange(value) // Call the onChange callback
      }
    }
  }

  const handleMouseEnter = (value: number) => {
    if (!readOnly) {
      setHoveredRating(value)
    }
  }

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoveredRating(0)
    }
  }

  return (
    <div className="flex space-x-4">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1
        const isFilled = starValue <= (hoveredRating || rating)
        return (
          <button
            key={starValue}
            type="button"
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            className="w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
          >
            {isFilled ? (
              <svg
                aria-label="star"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="svg-title">star</title>
                <path
                  d="M16.0003 2.66675L20.1203 11.0134L29.3337 12.3601L22.667 18.8534L24.2403 28.0267L16.0003 23.6934L7.76033 28.0267L9.33366 18.8534L2.66699 12.3601L11.8803 11.0134L16.0003 2.66675Z"
                  stroke="#397D54"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.31074 25.8333L11.0712 18.2229L5.16699 13.1042L12.967 12.4271L16.0003 5.25L19.0337 12.4271L26.8337 13.1042L20.9295 18.2229L22.6899 25.8333L16.0003 21.7979L9.31074 25.8333Z"
                  fill="#397D54"
                />
              </svg>
            ) : (
              <svg
                aria-label="star"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="svg-title">star</title>
                <path
                  d="M16.0003 2.66675L20.1203 11.0134L29.3337 12.3601L22.667 18.8534L24.2403 28.0267L16.0003 23.6934L7.76033 28.0267L9.33366 18.8534L2.66699 12.3601L11.8803 11.0134L16.0003 2.66675Z"
                  stroke="#397D54"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default StarRating
