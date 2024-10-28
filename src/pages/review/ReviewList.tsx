import CardPlaceContent from '@/components/CardPlaceContent'

interface ReviewListProp {
  onClick: () => void
}

const ReviewList = ({ onClick }: ReviewListProp) => {
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

  return (
    <>
      {listDestinationContent.map((content) => {
        return (
          <CardPlaceContent
            key={content.id}
            imageUrl={content.imageUrl}
            location={content.location}
            title={content.title}
            description={content.description}
            ratingValue={content.ratingValue}
            onClick={onClick}
          />
        )
      })}
    </>
  )
}

export default ReviewList
