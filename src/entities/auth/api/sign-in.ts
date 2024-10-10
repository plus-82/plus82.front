import { apiClient } from 'shared/api'

interface SignInRequest {
  email: string
  password: string
}

interface SignInResponse {
  accessToken: string
}

export const signIn = async (data: SignInRequest) => {
  const response = await apiClient.post<SignInResponse, SignInRequest>(
    '/auth/sign-in',
    data,
  )

  return response
}
