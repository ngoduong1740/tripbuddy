import { useSignUp } from '@/hooks/useSignUp'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const {
    formData,
    errors,
    isLoading,
    showPassword,
    showConfirmPassword,
    handleInputChange,
    handleSubmit,
    togglePasswordVisibility,
  } = useSignUp()

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
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center text-gray-400 my-4 w-4/5">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="w-4/5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-[#397D54] focus:ring-0 placeholder-[#5B5B5B] font-urbanist ${
                  errors.firstName ? 'border-b-red-500' : ''
                }`}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-[#397D54] focus:ring-0 placeholder-[#5B5B5B] font-urbanist ${
                  errors.lastName ? 'border-b-red-500' : ''
                }`}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-[#397D54] focus:ring-0 placeholder-[#5B5B5B] font-urbanist ${
                errors.email ? 'border-b-red-500' : ''
              }`}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-[#397D54] focus:ring-0 placeholder-[#5B5B5B] font-urbanist ${
                errors.password ? 'border-b-red-500' : ''
              }`}
              placeholder="Password"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => togglePasswordVisibility('password')}
              className="absolute right-3 top-3 mt-2 text-gray-400"
            >
              <img
                src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1730130935/eye_icon_p9oofs.svg"
                alt={showPassword ? 'Hide password' : 'Show password'}
              />
            </button>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="mb-10 relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`mt-1 p-3 w-full border-0 border-b-2 border-b-gray-300 focus:border-[#397D54] focus:ring-0 placeholder-[#5B5B5B] font-urbanist ${
                errors.confirmPassword ? 'border-b-red-500' : ''
              }`}
              placeholder="Confirm Password"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className="absolute right-3 top-3 mt-2 text-gray-400"
            >
              <img
                src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1730130935/eye_icon_p9oofs.svg"
                alt={showConfirmPassword ? 'Hide password' : 'Show password'}
              />
            </button>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${
              isLoading ? 'bg-gray-400' : 'bg-[#397D54] hover:bg-green-800'
            } text-white p-3 rounded-full font-semibold font-urbanist flex items-center justify-center`}
          >
            {isLoading ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-white mr-2" />
            ) : null}
            {isLoading ? 'Processing...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-[#5B5B5B] font-urbanist">
          Already have an account yet ?{' '}
          <Link
            to="/login"
            className="text-[#397D54] font-semibold underline font-urbanist"
          >
            Sign in to account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
