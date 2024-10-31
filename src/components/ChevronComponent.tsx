import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ChevronProps } from 'react-day-picker'

const ChevronComponent = (props: ChevronProps) => {
  const { orientation } = props

  switch (orientation) {
    case 'left':
      return <ChevronLeft className="h-10 w-10" />
    case 'right':
      return <ChevronRight className="h-10 w-10" />
    default:
      return <ChevronRight className="h-10 w-10" />
  }
}

export default ChevronComponent
