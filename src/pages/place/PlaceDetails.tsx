import CardPlaceContent from '@/components/CardPlaceContent'
import PrimaryHeader from '@/components/PrimaryHeader'
import { CardHeader } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

const PlaceDetails = () => {
  const navigate = useNavigate()

  const listDestinationContent = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1724268508231-451abbb9e4b4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Kathmandu, Nepal',
      title: 'Wonderful Thap Doi',
      description:
        'Europe is a home to stunning natural landscapes like the Swiss Alps, the Norwegian fjords, and the beaches of the Mediterranean coast. The European countries are well-connected through a vast network of trains, making it easy to travel across the continent.$The art, architecture, and cuisine in each of these cities reflect their unique cultural heritage., are popular tourist attractions, offering visitors a glimpse of the rich history and artistry of these cities.Europe is a home to stunning natural landscapes like the Swiss Alps, the Norwegian fjords, and the beaches of the Mediterranean coast. The European countries are well-connected through a vast network of trains, making it easy to travel across the continent.$The art, architecture, and cuisine in each of these cities reflect their unique cultural heritage., are popular tourist attractions, offering visitors a glimpse of the rich history and artistry of these cities.Europe is a home to stunning natural landscapes like the Swiss Alps, the Norwegian fjords, and the beaches of the Mediterranean coast. The European countries are well-connected through a vast network of trains, making it easy to travel across the continent.$The art, architecture, and cuisine in each of these cities reflect their unique cultural heritage., are popular tourist attractions, offering visitors a glimpse of the rich history and artistry of these cities.',
      ratingValue: 2,
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1724268508231-451abbb9e4b4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Kathmandu, Nepal',
      title: 'Wonderful Thap Doi',
      description:
        'Europe is a home to stunning natural landscapes like the Swiss Alps, the Norwegian fjords, and the beaches of the Mediterranean coast. The European countries are well-connected through a vast network of trains, making it easy to travel across the continent.$The art, architecture, and cuisine in each of these cities reflect their unique cultural heritage., are popular tourist attractions, offering visitors a glimpse of the rich history and artistry of these cities.',
      ratingValue: 4.5,
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1724268508231-451abbb9e4b4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Kathmandu, Nepal',
      title: 'Wonderful Thap Doi',
      description:
        'Europe is a home to stunning natural landscapes like the Swiss Alps, the Norwegian fjords, and the beaches of the Mediterranean coast. The European countries are well-connected through a vast network of trains, making it easy to travel across the continent.$The art, architecture, and cuisine in each of these cities reflect their unique cultural heritage., are popular tourist attractions, offering visitors a glimpse of the rich history and artistry of these cities.',
      ratingValue: 5,
    },
  ]

  const handleNavigate = () => {
    navigate('/reviews', { state: true })
  }

  return (
    <div>
      <PrimaryHeader
        title="Place Details"
        description="Places vừa chọn ở trang trước"
        searchPlaceholder={null}
      />
      <div className="px-12">
        <div>
          <CardHeader>
            <h2 className="text-2xl font-bold font-urbanist text-[#397D54]">
              Map Views
            </h2>
            <p className="text-[#404040]">
              See your destination in a effective map
            </p>
          </CardHeader>
          <div className="flex flex-col items-center h-[80vh]">
            <iframe
              className="h-full w-full px-12"
              title="Mapview"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.584811421889!2d109.21657047501992!3d13.803884386593412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6bf778c80973%3A0x8a7d0b5aa0af29c7!2zxJDhuqFpIGjhu41jIEZQVCBRdXkgTmjGoW4!5e0!3m2!1svi!2s!4v1729405174251!5m2!1svi!2s"
            />
          </div>
        </div>
        <div>
          <CardHeader>
            <h2 className="text-2xl font-bold font-urbanist text-[#397D54]">
              About Destination
            </h2>
            <p className="text-[#404040]">
              See what is interesting in this place
            </p>
          </CardHeader>
          {listDestinationContent.map((content) => {
            return (
              <CardPlaceContent
                key={content.id}
                imageUrl={content.imageUrl}
                location={content.location}
                title={content.title}
                description={content.description}
                ratingValue={null}
                onClick={handleNavigate}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PlaceDetails
