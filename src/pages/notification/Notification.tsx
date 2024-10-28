import TBPagination from '@/components/TBPagination'
import React from 'react'
import CardPlaceContent from '../../components/CardPlaceContent'

const Notification: React.FC = () => {
  const handleCardClick = () => {
    alert('Card clicked!')
  }

  const notificationData = {
    id: 'noti1',
    imageUrl:
      'https://saigontimestravel.com/wp-content/uploads/2024/03/Phong-cach-Nhat-Ban.jpg',
    location: 'Discount',
    title: 'Cheaper trip with TripBuddy',
    description:
      'Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere. Travel cheaper than anywhere.',
    buttonLabel: 'Mark as readed',
  }

  return (
    <div className="container mx-auto px-24 py-8 mt-24">
      <section className="text-center my-12">
        <h1 className="text-[55px] font-extrabold text-[#397D54] font-urbanist mb-6">
          Notification
        </h1>
        <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />
      </section>

      {[...Array(3)].map((_) => {
        return (
          <CardPlaceContent
            key={notificationData.id}
            imageUrl={notificationData.imageUrl}
            location={notificationData.location}
            title={notificationData.title}
            description={notificationData.description}
            buttonLabel={notificationData.buttonLabel}
            onClick={handleCardClick}
          />
        )
      })}
      <div className="mt-14 mb-5">
        <TBPagination />
      </div>
    </div>
  )
}

export default Notification
