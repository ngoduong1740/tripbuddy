import { AxiosError } from 'axios'
import { ApiError } from '../services/api/types'

export const createApiError = (error: AxiosError): ApiError => {
  if (!error.response) {
    return new ApiError(
      500,
      'Network Error - Please check your internet connection'
    )
  }
  return new ApiError(
    error.response.status,
    error.message || 'Something went wrong'
  )
}

export const isApiError = (error: unknown): error is ApiError => {
  return error instanceof ApiError
}
