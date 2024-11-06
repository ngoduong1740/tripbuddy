import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { createApiError } from '../utils/error'

const DEFAULT_CONFIG = {
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json-patch+json',
    'Accept': 'text/plain',
  },
}

const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

const responseInterceptor = {
  response: (response: AxiosResponse): AxiosResponse => response,
  error: (error: AxiosError): Promise<never> => {
    const apiError = createApiError(error)
    return Promise.reject(apiError)
  },
}

const createApiInstance = (): AxiosInstance => {
  const instance = axios.create(DEFAULT_CONFIG)

  instance.interceptors.request.use(
    requestInterceptor,
    (error: AxiosError): Promise<never> => {
      const apiError = createApiError(error)
      return Promise.reject(apiError)
    }
  )

  instance.interceptors.response.use(
    responseInterceptor.response,
    responseInterceptor.error
  )

  return instance
}

export const api = createApiInstance()
export const apiClient = createApiInstance()
export default api
