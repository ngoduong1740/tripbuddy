import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const VerifyCode = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (!/^\d*$/.test(value)) {
      e.target.value = value.slice(0, -1)
    }
  }

  const inputs = Array.from({ length: 4 }).map(() => ({
    id: uuidv4(),
  }))

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dsutqg1fy/image/upload/v1730127975/Frame_26_pwfj07.svg')",
        }}
      />

      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10 mt-3">
        <h2 className="text-3xl font-bold text-[#397D54] mb-4 font-urbanist">
          Enter Verification Code
        </h2>
        <p className="text-[#5B5B5B] mb-8 font-urbanist">
          We have just sent a verification code to <br />
          <span className="text-[#397D54] font-semibold">
            tripbuddy@gmail.com
          </span>
        </p>

        <form className="w-full flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-8">
            {inputs.map((input) => (
              <input
                key={input.id}
                type="text"
                maxLength={1}
                inputMode="numeric"
                className="w-16 h-16 border-2 border-gray-300 rounded focus:outline-none focus:border-[#397D54] text-center text-[30px] font-bold font-urbanist text-[#397D54]" // Chỉnh kích thước chữ tại đây
                onChange={handleInputChange}
                placeholder=""
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-3/5 bg-[#397D54] hover:bg-green-800 text-white p-3 rounded-full font-semibold mb-5"
          >
            Verify
          </button>

          <button
            type="submit"
            className="w-3/5 bg-white hover:bg-[#EAEAEA] hover:border-[#EAEAEA] text-[#397D54] border border-[#397D54] p-3 rounded-full font-semibold flex items-center justify-center"
          >
            Resend Code
          </button>
        </form>
      </div>
    </div>
  )
}

export default VerifyCode
