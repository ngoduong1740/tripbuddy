import { authService } from '@/services/api/auth.service'
import { FormEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ValidationError, object, string } from 'yup'

interface LoginFormData {
  email: string
  password: string
  remember: boolean
}

interface FormErrors {
  email?: string
  password?: string
  general?: string
}

const loginSchema = object({
  email: string().required('Email is required').email('Invalid email format'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

export const useLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    remember: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }))
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }))
    }
  }

  const validateForm = async (): Promise<boolean> => {
    try {
      await loginSchema.validate(formData, { abortEarly: false })
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof ValidationError) {
        const yupError = error
        const newErrors: FormErrors = {}
        for (const err of yupError.inner) {
          if (err.path) {
            newErrors[err.path as keyof FormErrors] = err.message
          }
        }
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors({})

    const isValid = await validateForm()
    if (!isValid) return

    try {
      setIsLoading(true)
      const response = await authService.login({
        email: formData.email,
        password: formData.password,
      })

      if (response.code === 200) {
        if (formData.remember) {
          localStorage.setItem('rememberMe', 'true')
        }

        const from = location.state?.from?.pathname || '/'
        navigate(from, { replace: true })
      }
    } catch (error) {
      setErrors({
        general:
          error instanceof Error
            ? error.message
            : 'Login failed. Please try again.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return {
    formData,
    errors,
    isLoading,
    showPassword,
    handleInputChange,
    handleSubmit,
    togglePasswordVisibility,
  }
}
