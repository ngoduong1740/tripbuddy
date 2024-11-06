import { CardHeader } from '@/components/ui/card'

interface ReccomendCardHeaderProps {
  LeftComponent: React.ReactNode
  RightComponent: React.ReactNode
}

const ReccomendCardHeader: React.FC<ReccomendCardHeaderProps> = ({
  LeftComponent,
  RightComponent,
}) => {
  return (
    <CardHeader className="flex-row justify-between items-end">
      <div className="w-1/4">{LeftComponent}</div>
      <div className="w-1/4 flex justify-end">{RightComponent}</div>
    </CardHeader>
  )
}

export default ReccomendCardHeader
