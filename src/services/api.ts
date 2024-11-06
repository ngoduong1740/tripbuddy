import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

export interface ApiError {
  status: number
  message: string
}

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const customError: ApiError = {
      status: error.response?.status || 500,
      message: error.response?.data?.message || 'Something went wrong',
    }

    if (customError.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }

    return Promise.reject(customError)
  }
)

export default api
