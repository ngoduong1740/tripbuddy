import ImageUploader from '@/components/ImageUploader'
import SearchableDropdown from '@/components/SearchableDropdown'
import StarRating from '@/components/StarRating'
import { DropdownValue } from '@/components/type/types-common'

interface CreateReviewProp {
  onClick: () => void
}

const CreateReviewForm = ({ onClick }: CreateReviewProp) => {
  const listPlace = [
    {
      id: '1',
      value: 'Quy Nhon',
    },
    {
      id: '2',
      value: 'Phu Yen',
    },
    {
      id: '3',
      value: 'Vung Tau',
    },
    {
      id: '4',
      value: 'Ha Noi',
    },
    {
      id: '5',
      value: 'Ho Chi Minh',
    },
    {
      id: '6',
      value: 'Gia Lai',
    },
  ]

  const handleUploadImage = (item: string | null) => {
    console.log('Selected item:', item)
  }

  const handleStarRating = (value: number) => {
    console.log('Selected item:', value)
  }

  const handleSelectDestination = (item: DropdownValue) => {
    console.log('Selected item:', item)
  }

  const handleSelectPlace = (item: DropdownValue) => {
    console.log('Selected item:', item)
  }

  return (
    <div className="flex flex-row justify-between mb-12">
      <div className="flex-[0.4] flex flex-col items-center">
        <div className="mt-8 w-full">
          <ImageUploader onChange={handleUploadImage} />
        </div>
        <div className="mt-8 text-center">
          <StarRating readOnly={false} onChange={handleStarRating} />
        </div>
      </div>
      <div className="flex-col flex-[0.5] text-left">
        <div>
          <label className="block mb-6" htmlFor="">
            {'Destination you visited'}
            <SearchableDropdown
              items={listPlace}
              placeholder="Some Destination You Visited"
              onSelect={handleSelectDestination}
            />
          </label>
          <label className="block mb-6" htmlFor="">
            {'Specific place'}
            <SearchableDropdown
              items={listPlace}
              placeholder="Choose Some Specific Places"
              onSelect={handleSelectPlace}
            />
          </label>
          <label className="block mb-6">
            {'Your comment'}
            <textarea
              className="w-full h-60 mt-2 rounded-md"
              placeholder="Summarize your Travel Journey. This will helpful with another travellers."
            />
          </label>
          <label className="flex items-center mb-6">
            <input type="checkbox" className="rounded-sm" />
            <span className="ml-2">
              {
                'I certify that the information in this review is based solely on my own experiences.'
              }
            </span>
          </label>
        </div>
        <button
          type="button"
          className="font-urbanist rounded-3xl bg-[#397D54] py-2 px-6 text-[#FFFFFF]"
          onClick={onClick}
        >
          Summit Review
        </button>
      </div>
    </div>
  )
}

export default CreateReviewForm
