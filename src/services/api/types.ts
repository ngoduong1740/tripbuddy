export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  message: string | null
}

export interface RegisterRequest {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface RegisterResponse {
  message: string | null
}

export interface ApiResponse<T> {
  content: T
  code: number
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public isApiError: true = true
  ) {
    super(message)
    this.name = 'ApiError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }
  }
}
