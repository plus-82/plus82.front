'use server'

import { getTeacherSession } from 'entities/auth'
import { apiClient } from 'shared/api'

import { User } from '../model/user'

type GetUserMeResponse = User

export const getUserMe = async () => {
  const { accessToken } = await getTeacherSession()

  const response = await apiClient.get<GetUserMeResponse>({
    endpoint: '/users/me',
    option: {
      authorization: `Bearer ${accessToken}`,
      tags: ['user-me'],
    },
  })

  return response
}
