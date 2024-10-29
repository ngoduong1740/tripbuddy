const SignUp = () => {
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
          Hi, Get Started Now 👋
        </h2>
        <p className="text-gray-500 mb-6 font-urbanist">
          Enter details to create your{' '}
          <span className="font-bold text-[#397D54]">Trip Buddy</span> account
        </p>

        <button
          type="button"
          className="flex items-center justify-center w-4/5 p-3 border rounded-full mb-4 text-[#397D54] bg-white border-[#397D54] hover:bg-gray-100 font-urbanist"
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            className="w-5 h-5 mr-3"
          />
          Continue with Google
        </button>

        <div className="flex items-center text-gray-400 my-4 w-4/5">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="w-4/5">
          <div className="mb-4">
            <input
              type="text"
              id="fullName"
              className="mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-b-green-500 focus:ring-0 placeholder-[#5B5B5B] font-urbanist"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-b-green-500 focus:ring-0 placeholder-[#5B5B5B] font-urbanist"
              placeholder="Email Address"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type="password"
              id="password"
              className="mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-b-green-500 focus:ring-0 placeholder-[#5B5B5B] font-urbanist"
              placeholder="Password"
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
              id="confirmPassword"
              className="mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-b-green-500 focus:ring-0 placeholder-[#5B5B5B] font-urbanist"
              placeholder="Confirm Password"
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
            className="w-full bg-[#397D54] hover:bg-green-800 text-white p-3 rounded-full font-semibold font-urbanist"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-[#5B5B5B] font-urbanist">
          Already have an account yet ?{' '}
          <a
            href="/login"
            className="text-[#397D54] font-semibold underline font-urbanist"
          >
            Sign in to account
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignUp
