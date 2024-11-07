const UserStats = () => {
  return (
    <div className="flex justify-center items-center space-x-4 gap-16">
      <div className="text-center">
        <p className="font-urbanist text-[#000000] font-bold text-[20px]">
          Reward Points
        </p>
        <span className="font-urbanist text-[#397D54] font-bold text-[22px]">
          0
        </span>
      </div>
      <div className="border-l-2 border-[#EAEAEA] h-24 hidden md:block" />
      <div className="text-center">
        <p className="font-urbanist text-[#000000] font-bold text-[20px]">
          Schedules
        </p>
        <span className="font-urbanist text-[#397D54] font-bold text-[22px]">
          0
        </span>
      </div>
      <div className="border-l-2 border-[#EAEAEA] h-24 hidden md:block" />
      <div className="text-center">
        <p className="font-urbanist text-[#000000] font-bold text-[20px]">
          History
        </p>
        <span className="font-urbanist text-[#397D54] font-bold text-[22px]">
          0
        </span>
      </div>
    </div>
  )
}

export default UserStats
