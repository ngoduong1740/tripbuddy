import { Link } from 'react-router-dom'

const ForgotPassword = () => {
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
          Forgot Password 🤔
        </h2>
        <p className="text-gray-500 mb-6 font-urbanist">
          No worries, we will send you reset instructions
        </p>

        <form className="w-4/5">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="mt-1 mb-6 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-[#397D54] focus:ring-0 placeholder-[#5B5B5B] font-urbanist"
              placeholder="Email Address"
            />
          </div>

          <button
            type="submit"
            className="w-full mb-4 bg-[#397D54] hover:bg-green-800 text-white p-3 rounded-full font-semibold font-urbanist"
          >
            Log In
          </button>

          <Link to="/login">
            <button
              type="button"
              className="w-full bg-white hover:bg-[#EAEAEA] hover:border-[#EAEAEA] text-[#397D54] border border-[#397D54] p-3 rounded-full font-semibold"
            >
              <div className="flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1730132243/left_arrow_cge2np.svg"
                  alt=""
                  className="mr-2"
                />
                <span>Back to Login</span>
              </div>
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
