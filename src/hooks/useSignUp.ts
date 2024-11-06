import { authService } from '@/services/api/auth.service'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ValidationError, object, ref, string } from 'yup'

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const signUpSchema = object({
  firstName: string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: string().required('Email is required').email('Invalid email format'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords must match'),
})

export const useSignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [id]: '',
      }))
    }
  }

  const validateForm = async (): Promise<boolean> => {
    try {
      await signUpSchema.validate(formData, { abortEarly: false })
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof ValidationError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {}

        for (const err of error.inner) {
          if (err.path) {
            newErrors[err.path as keyof FormData] = err.message
          }
        }

        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const isValid = await validateForm()
    if (!isValid) return

    try {
      setIsLoading(true)
      const response = await authService.register({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
      })

      if (response.code === 200) {
        navigate('/login', {
          state: {
            message: response.content.message,
          },
        })
      } else {
        setErrors({ email: response.content.message ?? 'Error' })
      }
    } catch (error) {
      setErrors({
        email: error instanceof Error ? error.message : 'Something went wrong',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword)
    } else {
      setShowConfirmPassword(!showConfirmPassword)
    }
  }

  return {
    formData,
    errors,
    isLoading,
    showPassword,
    showConfirmPassword,
    handleInputChange,
    handleSubmit,
    togglePasswordVisibility,
  }
}
