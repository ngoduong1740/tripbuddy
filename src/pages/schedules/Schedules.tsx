import { Button, buttonVariants } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
          className="mx-48 w-full"
          classNames={{
            month: 'w-full space-y-4',
            caption:
              'flex justify-center py-10 mb-10 relative items-center border-b-2 border-gray-200',
            caption_label: 'text-4xl font-semibold',
            nav_button: cn(
              'border-0 h-10 w-10 bg-transparent p-0 opacity-50 hover:opacity-100'
            ),
            nav_button_previous: 'absolute left-1',
            nav_button_next: 'absolute right-1',
            head_row: 'flex w-full justify-between',
            head_cell: 'text-primary rounded-md w-9 font-semibold text-xl',
            row: 'flex w-full my-16 justify-between',
            cell: 'text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-full [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent [&:has([aria-selected])]:rounded-full focus-within:relative focus-within:z-20',
            day: cn(
              buttonVariants({ variant: 'ghost' }),
              'h-10 w-10 p-0 font-semibold aria-selected:opacity-100 text-lg rounded-full'
            ),
          }}
          components={{
            IconLeft: () => <ChevronLeft className="h-12 w-12" />,
            IconRight: () => <ChevronRight className="h-12 w-12" />,
          }}
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
