import * as React from 'react'
import { DayPicker } from 'react-day-picker'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import ChevronComponent from '../ChevronComponent'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
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
          'absolute left-1 z-10 h-7 w-7 bg-transparent pt-10 opacity-50 hover:opacity-100'
        ),
        button_next: cn(
          'absolute right-1 z-10 h-7 w-7 bg-transparent pt-10 opacity-50 hover:opacity-100'
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
        Chevron: ChevronComponent,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
