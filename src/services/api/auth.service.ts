import { apiClient } from '@/services/axios'
import { API_ENDPOINTS } from './endpoints'
import type {
  ApiResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from './types'

const login = async (
  data: LoginRequest
): Promise<ApiResponse<LoginResponse>> => {
  const response = await apiClient.post<ApiResponse<LoginResponse>>(
    API_ENDPOINTS.AUTH.LOGIN,
    data
  )
  if (response.data.code === 200) {
    const { accessToken } = response.data.content
    localStorage.setItem('token', accessToken)
  }
  return response.data
}

const register = async (
  data: RegisterRequest
): Promise<ApiResponse<RegisterResponse>> => {
  const response = await apiClient.post<ApiResponse<RegisterResponse>>(
    API_ENDPOINTS.AUTH.REGISTER,
    data
  )
  return response.data
}

const logout = (): void => {
  localStorage.removeItem('token')
}

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('token')
}

const getToken = (): string | null => {
  return localStorage.getItem('token')
}

export const authService = {
  login,
  register,
  logout,
  isAuthenticated,
  getToken,
} as const
