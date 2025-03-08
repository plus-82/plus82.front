'use server'

import { apiClient, HttpError } from 'shared/api'

type ResetPasswordRequest = {
  code: string
  password: string
}

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  return {
    type: 'toast',
    message: 'An error occurred while resetting the password',
  }
}

export const resetPassword = async (data: ResetPasswordRequest) => {
  try {
    await apiClient.post<null, ResetPasswordRequest>({
      endpoint: '/auth/reset-password',
      body: data,
    })
  } catch (error) {
    return handleError(error as Error)
  }
}
