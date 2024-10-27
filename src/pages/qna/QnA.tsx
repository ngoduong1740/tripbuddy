import React, { useCallback, useEffect, useRef, useState } from 'react'

const QnA: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const questions = [
    'How can I create my travel schedule ?',
    'What features does this system offer ?',
    'Who developed this system ?',
    'How user - friendly is the system for first - time travelers ?',
    'How can I handle the quality of each destination ?',
    'Can I use this system on another platform ?',
  ]

  const answers = [
    'To create your travel schedule, simply log in, get access to "Schedules" section on navigation bar. You will be proccessed to a schedule, just choose the date you want to travel, click "Create Plan" and choose any places you want.',
    'The system offers large amounts of destinations, many intersting places with real reviews from another people and so on. Besides, you can manage your trip by planning a schedule for yourself, make sure that you will have a memorable trip.',
    'This system was developed by "TripBuddy" team consist of 5 software engineers from FPT University, focusing on simplifying trip planning. You can know more about them by get access to "About Us" on the navgation bar.',
    'The system is designed to be user - friendly for first-time travelers, with an intuitive interface and helpful features and guides to make planning simple.',
    'You can evaluate destinations based on factual and verified user reviews, ratings, and suggestions to ensure a high - quality experience during your trip.',
    'Yes, the system is available on multiple platforms, including web browsers and Android smartphones.',
  ]

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (activeIndex === index) {
          ref.style.maxHeight = `${ref.scrollHeight}px`
        } else {
          ref.style.maxHeight = '0px'
        }
      }
    })
  }, [activeIndex])

  const setContentRef = useCallback(
    (element: HTMLDivElement | null, index: number) => {
      contentRefs.current[index] = element
    },
    []
  )

  return (
    <div className="min-h-screen mt-10">
      <main className="py-12 px-6">
        <h1 className="text-[55px] font-extrabold text-[#397D54] font-urbanist mb-6 text-center">
          QnA
        </h1>
        <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />
        <div className="max-w-3xl mx-auto">
          {questions.map((question, index) => (
            <div
              key={question}
              className="bg-white shadow-lg rounded-lg mb-4 p-6"
            >
              <button
                type="button"
                className="flex justify-between items-center cursor-pointer w-full"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-lg font-semibold">
                  <span className="text-[#397D54] font-bold font-urbanist text-[32px] mr-3">
                    {(index + 1).toString().padStart(2, '0')}.{' '}
                  </span>

                  <span className="text-[#000000] font-semibold font-urbanist text-[20px]">
                    {question}
                  </span>
                </h2>
                <span className="text-2xl text-[#397D54]">
                  {activeIndex === index ? (
                    <img
                      className="w-9 h-9"
                      src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729732699/minus_shaped_s9696r.svg"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-9 h-9"
                      src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729700474/Arrow_vujpz0.svg"
                      alt=""
                    />
                  )}
                </span>
              </button>

              <div
                ref={(el) => setContentRef(el, index)}
                className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
              >
                <div className="pt-4 text-[#000000] font-medium font-urbanist text-[16px] mt-3">
                  <p>{answers[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default QnA
