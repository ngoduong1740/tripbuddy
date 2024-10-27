import { useState } from 'react'
import { DropdownValue } from './type/types-common'

interface SearchableDropdownProps {
  items: DropdownValue[]
  placeholder: string
  onSelect: (item: DropdownValue) => void
}

const SearchableDropdown = ({
  items,
  placeholder,
  onSelect,
}: SearchableDropdownProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSelect = (item: DropdownValue) => {
    setSearchTerm(item.value)
    setIsOpen(false)
    if (onSelect) onSelect(item) // Call the onSelect callback if provided
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          setIsOpen(true)
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      {isOpen && filteredItems.length > 0 && (
        <ul className="absolute z-10 mt-1 border border-gray-300 bg-white rounded-md w-full shadow-lg max-h-48 overflow-auto">
          {filteredItems.map((item) => {
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onMouseDown={() => handleSelect(item)}
                  className="p-2 w-full text-left hover:bg-gray-200 cursor-pointer"
                >
                  {item.value}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SearchableDropdown
