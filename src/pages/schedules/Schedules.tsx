import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { DayPicker } from 'react-day-picker'
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
        <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays={true}
          className="mx-48 w-full p-3"
          classNames={{
            months:
              'relative flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm:gap-y-0',
            month: 'w-full gap-y-4',
            month_caption:
              'flex justify-center py-10 mb-10 relative items-center border-b-2 border-gray-200',
            caption: 'relative',
            caption_label: 'text-4xl font-semibold',
            nav: 'flex items-start',
            button_previous: cn(
              'absolute left-1 h-7 w-7 bg-transparent pt-10 opacity-50 hover:opacity-100'
            ),
            button_next: cn(
              'absolute right-1 h-7 w-7 bg-transparent pt-10 opacity-50 hover:opacity-100'
            ),
            month_grid: 'w-full',
            weekdays: 'flex flex-row w-full justify-between',
            weekday: 'text-primary rounded-md w-9 font-semibold text-xl',
            week: 'flex w-full my-16 justify-between',
            day: 'text-center text-sm p-0 aria-selected:bg-primary [&.outside]:aria-selected:bg-[#E5E5E7] rounded-full',
            day_button: cn(
              buttonVariants({ variant: 'ghost' }),
              'h-10 w-10 p-0 font-semibold aria-selected:opacity-100 text-lg rounded-full'
            ),
            selected:
              'bg-primary text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground [&>button]:focus:bg-primary [&>button]:focus:text-primary-foreground',
            today: 'bg-accent text-accent-foreground',
            outside:
              'outside text-muted-foreground opacity-50 aria-selected:text-muted-foreground aria-selected:opacity-30',
            disabled: 'text-muted-foreground opacity-50',
            hidden: 'invisible',
          }}
          components={{
            Chevron: ({ orientation }) => {
              const Icon = orientation === 'left' ? ChevronLeft : ChevronRight
              return <Icon className="h-10 w-10" />
            },
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
