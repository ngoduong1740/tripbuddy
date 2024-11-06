import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface FeaturedSectionHeaderProps {
  title: string
  description: string
  rightContent?: React.ReactNode
}

interface MediaItemProps {
  id: number | string
  imageUrl: string
  title: string
  subtitle?: string
}

interface FeaturedSectionProps {
  header: FeaturedSectionHeaderProps
  items: MediaItemProps[]
}

// FeaturedSectionHeader.jsx
const FeaturedSectionHeader = ({
  title,
  description,
  rightContent,
}: FeaturedSectionHeaderProps) => {
  return (
    <div className="flex flex-row space-y-0 justify-between items-center mb-8">
      <div>
        <h2 className="text-3xl font-bold text-[#397D54] mb-4">{title}</h2>
        <p className="text-[#404040]">{description}</p>
      </div>
      {rightContent}
    </div>
  )
}

// MediaGrid.jsx
const MediaGrid = ({
  items,
}: {
  items: MediaItemProps[]
}) => {
  return (
    <div className="flex justify-between items-center gap-8 w-full">
      {items.map((item) => (
        <div key={item.id} className="flex-1">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="rounded-2xl w-full h-auto mb-4"
          />
          <div className="space-y-2">
            {item.subtitle && (
              <p className="text-sm text-gray-600">{item.subtitle}</p>
            )}
            <span className="font-bold text-2xl block">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// FeaturedSection.jsx
const FeaturedSection = ({ header, items }: FeaturedSectionProps) => {
  const { title, description, rightContent } = header
  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <FeaturedSectionHeader
          title={title}
          description={description}
          rightContent={rightContent}
        />
      </CardHeader>
      <CardContent>
        <MediaGrid items={items} />
      </CardContent>
    </Card>
  )
}

export { FeaturedSectionHeader, MediaGrid, FeaturedSection }
