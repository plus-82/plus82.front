import { apiClient } from 'shared/api'
import { getCookie } from 'shared/lib'

import { User } from '../model/user'

type GetUserMeResponse = User

export const getUserMe = async () => {
  const accessToken = await getCookie('accessToken')

  const response = await apiClient.get<GetUserMeResponse>({
    endpoint: '/users/me',
    option: {
      authorization: `Bearer ${accessToken}`,
      tags: ['user-me'],
    },
  })

  return response
}
