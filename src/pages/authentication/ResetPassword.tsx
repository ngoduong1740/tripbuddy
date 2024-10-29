const ResetPassword = () => {
  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dsutqg1fy/image/upload/v1730127975/Frame_26_pwfj07.svg')",
        }}
      />

      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h2 className="text-3xl font-bold text-[#397D54] mb-4 font-urbanist">
          Reset Password 😊
        </h2>
        <p className="text-gray-500 mb-6 font-urbanist">
          Enter your New Password to access your account
        </p>

        <form className="w-4/5">
          <div className="mb-4 relative">
            <input
              type="password"
              id="newPassword"
              className="mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-b-green-500 focus:ring-0 placeholder-[#5B5B5B] font-urbanist"
              placeholder="New Password"
            />

            <button
              type="button"
              className="absolute right-3 top-3 mt-2 text-gray-400"
            >
              <img
                src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1730130935/eye_icon_p9oofs.svg"
                alt=""
              />
            </button>
          </div>

          <div className="mb-10 relative">
            <input
              type="password"
              id="confirmNewPassword"
              className="mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-b-green-500 focus:ring-0 placeholder-[#5B5B5B] font-urbanist"
              placeholder="Confirm New Password"
            />

            <button
              type="button"
              className="absolute right-3 top-3 mt-2 text-gray-400"
            >
              <img
                src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1730130935/eye_icon_p9oofs.svg"
                alt=""
              />
            </button>
          </div>

          <button
            type="submit"
            className="w-full mb-4 bg-[#397D54] hover:bg-green-800 text-white p-3 rounded-full font-semibold font-urbanist"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
