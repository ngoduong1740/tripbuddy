import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Schedules: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const navigate = useNavigate()

  const handleCreatePlan = () => {
    navigate('/schedules/detail')
  }

  return (
    <div className="my-48 px-24">
      <div className="flex justify-center">
        <h1 className="font-urbanist text-5xl text-center font-extrabold text-[#397D54] pb-6 mb-20 whitespace-pre-line border-b-2">
          {'Have good plan today\nHave the best trip someday'}
        </h1>
      </div>
      <div className="flex">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays={true}
          className="mx-48 w-full"
          footer={
            <div className="mt-32 w-full flex justify-center">
              <Button
                className="font-urbanist rounded-full px-16 py-7 text-lg font-bold"
                onClick={handleCreatePlan}
              >
                Create Plan
              </Button>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Schedules
