'use server'

import { apiClient, HttpError, ResourceNotFoundExceptionCode } from 'shared/api'
import { getCookie } from 'shared/lib'

const handleSuccess = () => {
  return true
}

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  if (error.code === ResourceNotFoundExceptionCode.USER_NOT_FOUND) {
    return {
      type: 'toast',
      message: 'This account has been deactivated',
    }
  } else {
    return {
      type: 'toast',
      message: error.message || 'An error occurred while deleting the account',
    }
  }

  return false
}

export const deleteUserMe = async () => {
  try {
    const accessToken = await getCookie('accessToken')

    await apiClient.delete({
      endpoint: '/users/me',
      option: {
        authorization: `Bearer ${accessToken}`,
      },
      body: null,
    })

    return handleSuccess()
  } catch (error) {
    return handleError(error as Error)
  }
}
