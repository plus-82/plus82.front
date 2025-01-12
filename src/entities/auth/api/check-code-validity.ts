import { apiClient } from 'shared/api'

export type CheckCodeValidityRequest = {
  code: string | null
}

export const checkCodeValidity = async (data: CheckCodeValidityRequest) => {
  const response = await apiClient.get<null>({
    endpoint: '/auth/reset-password/validate',
    queryParams: data,
  })

  return response
}
