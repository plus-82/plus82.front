import { apiClient } from 'shared/api'

type RequestPasswordResetRequest = {
  email: string
}

export const requestPasswordReset = async (
  data: RequestPasswordResetRequest,
) => {
  const response = await apiClient.post<null, RequestPasswordResetRequest>({
    endpoint: '/auth/reset-password/request',
    body: data,
  })

  return response
}
