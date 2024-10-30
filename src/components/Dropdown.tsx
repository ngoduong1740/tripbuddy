import React, { useState } from 'react'
import { DropdownValue } from './type/types-common'

interface DropdownProps {
  options: DropdownValue[]
  placeholder: string
  onSelect: (item: DropdownValue) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleSelect = (item: DropdownValue) => {
    setValue(item.value)
    setIsOpen(false)
    if (onSelect) onSelect(item) // Call the onSelect callback if provided
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="relative w-full"
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="border border-[#397D54] text-[#397D54] placeholder-[#397D54] px-6 rounded-full p-2 w-full"
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#397D54]"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.25l3.71-3.04a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </button>

      {isOpen && options.length > 0 && (
        <ul className="absolute z-10 mt-1 border border-gray-300 bg-white rounded-md w-full shadow-lg max-h-48 overflow-auto">
          {options.map((item) => {
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

export default Dropdown
