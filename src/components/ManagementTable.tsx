import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Item {
  id: number | string
  img: string
  name: string
  description: string
  location: string
}

interface ManagementTableProps {
  columns: Array<{ Header: string; accessor: keyof Item | 'actions' }>
  items: Item[]
  onEdit: (id: string) => void
}

const ManagementTable: React.FC<ManagementTableProps> = ({
  columns,
  items,
  onEdit,
}) => {
  return (
    <table className="min-w-full bg-white rounded-lg">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.accessor as string}
              className="px-4 py-2 w-1/4 font-semibold text-[#397D54] text-[18px]"
            >
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="text-center border-b">
            <td className="px-4 py-4 flex ml-10 font-urbanist font-bold text-[18px]">
              {item.img && (
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-full mr-2"
                />
              )}
              <span className="mt-6">{item.name}</span>
            </td>
            <td className="px-4 py-4 border-b">
              <span className="px-2 py-1 font-urbanist">
                {item.description}
              </span>
            </td>
            <td className="px-4 py-4 border-b">
              <div className="flex items-center justify-center font-urbanist">
                <span>{item.location}</span>
              </div>
            </td>

            <td className="px-4 py-4">
              <button
                type="button"
                onClick={() => onEdit(item.id as string)}
                className="bg-[#397D54] text-white px-4 py-1 rounded-full mr-2 font-urbanist font-semibold"
              >
                Edit
              </button>
              <button
                type="button"
                className="bg-[#A65959] text-white px-4 py-1 rounded-full font-urbanist font-semibold"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ManagementTable
