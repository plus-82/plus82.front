import { apiClient } from 'shared/api'
import { getCookie } from 'shared/lib'

export type ChangePasswordRequest = {
  currentPassword: string
  newPassword: string
}

export const changePassword = async (data: ChangePasswordRequest) => {
  const accessToken = await getCookie('accessToken')

  const response = await apiClient.put<null, ChangePasswordRequest>({
    endpoint: '/users/me/password',
    option: {
      authorization: `Bearer ${accessToken}`,
    },
    body: data,
  })

  return response
}
