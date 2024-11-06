import { CardContentComponentProps } from '@/components/type/types-common'

const CardContentComponent: React.FC<CardContentComponentProps> = ({
  ...props
}) => {
  return (
    <>
      <p className="text-[#404040] mb-6">{props.label}</p>
      <h2 className="text-4xl font-bold font-urbanist text-[#397D54]">
        {props.title}
      </h2>
    </>
  )
}

export default CardContentComponent
