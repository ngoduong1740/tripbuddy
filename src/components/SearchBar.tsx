interface SearchBarProps {
  placeholder: string
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = '' }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="border border-[#397D54] w-full placeholder-[#397D54] rounded-3xl py-2 px-4 focus:ring-[0.5px] focus:ring-[#397D54] focus:border-[#397D54]"
      />
      <svg
        aria-label="searh"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#397D54]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title id="svg-title">search</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M17 10a7 7 0 10-14 0 7 7 0 0014 0z"
        />
      </svg>
    </div>
  )
}

export default SearchBar
