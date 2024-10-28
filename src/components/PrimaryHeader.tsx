import SearchBar from './SearchBar'

interface PrimaryHeaderProps {
  title: string
  description: string | null
  searchPlaceholder: string | null
}

const PrimaryHeader: React.FC<PrimaryHeaderProps> = ({
  title = '',
  description = null,
  searchPlaceholder = null,
}) => {
  return (
    <div>
      <section className="flex-col justify-center items-center text-center max-w-4xl font-urbanist p-4 mt-28 mx-auto">
        <h1 className="text-5xl font-extrabold text-[#397D54] mb-6">{title}</h1>
        {description && (
          <p className="text-2xl font-bold text-[#5B5B5B]">{description}</p>
        )}
        {searchPlaceholder && (
          <div className="flex justify-center items-center text-[#397D54]">
            <div className="w-3/5">
              <SearchBar placeholder={searchPlaceholder} />
            </div>
          </div>
        )}
      </section>
      <hr className="w-[1054px] h-[2px] mx-auto" />
    </div>
  )
}

export default PrimaryHeader
