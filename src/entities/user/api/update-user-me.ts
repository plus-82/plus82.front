import { apiClient } from 'shared/api'
import { getCookie } from 'shared/lib'

export type UpdateUserMeRequest = {
  firstName: string
  lastName: string
  countryId: number | null
  genderType: 'MALE' | 'FEMALE'
  birthDate: string
}

export const updateUserMe = async (data: UpdateUserMeRequest) => {
  const accessToken = await getCookie('accessToken')

  const response = await apiClient.put<null, UpdateUserMeRequest>({
    endpoint: '/users/me',
    option: {
      authorization: `Bearer ${accessToken}`,
    },
    body: data,
  })

  return response
}
