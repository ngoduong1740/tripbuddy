import TBPagination from '@/components/TBPagination'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Status } from '@/types/status.enum'
import { generateId } from '@/utils/id'
import { useNavigate } from 'react-router-dom'

const SchedulesDetail: React.FC = () => {
  const navigate = useNavigate()

  const scheduleData = {
    day: '01/01/1991',
    list: ['Place 1', 'Place 2', 'Place 3'],
    status: Status.FINISHED,
  }

  const getStatusStyles = (status: Status) => {
    switch (status) {
      case Status.ON_GOING:
        return 'bg-[#F5FFB9] hover:bg-[#F5FFB9]'
      case Status.PREPARE:
        return 'bg-[#FFACAC] hover:bg-[#FFACAC]'
      case Status.FINISHED:
        return 'bg-[#C8FFB9] hover:bg-[#C8FFB9]'
      default:
        return 'bg-[#F5FFB9] hover:bg-[#F5FFB9]'
    }
  }

  const statusStyle = getStatusStyles(scheduleData.status)

  const listComponents = Array.from({ length: 6 }).map(() => ({
    id: generateId(),
  }))

  const handleBackSchedulesPage = () => {
    navigate('/schedules')
  }

  return (
    <div className="mt-48 mb-20 px-24">
      <section className="flex justify-center">
        <h1 className="font-urbanist text-5xl text-center font-extrabold text-[#397D54] pb-6 mb-20 whitespace-pre-line border-b-2">
          {'Have good plan today\nHave the best trip someday'}
        </h1>
      </section>
      <div className="flex flex-wrap gap-x-48 gap-y-12 px-24">
        {listComponents.map((component) => {
          return (
            <Card
              key={component.id}
              className="rounded-2xl w-[calc(50%-6rem)] pl-2 pb-4 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            >
              <CardHeader className="py-2">
                <Badge className="w-fit h-fit px-1.5 bg-[#397D54] hover:bg-[#397D54] font-bold">
                  {scheduleData.day}
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6">
                  {scheduleData.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-16 pl-2 font-bold">
                {'Status:'}
                <Badge
                  className={`w-fit h-fit ml-4 px-2 text-[#333333BA] ${statusStyle}`}
                >
                  {scheduleData.status}
                </Badge>
              </CardFooter>
            </Card>
          )
        })}
      </div>
      <div className="mt-20">
        <TBPagination />
      </div>
      <div className="flex justify-center mt-20">
        <Button
          className="rounded-3xl font-bold px-9"
          onClick={handleBackSchedulesPage}
        >
          Back To List
        </Button>
      </div>
    </div>
  )
}

export default SchedulesDetail
