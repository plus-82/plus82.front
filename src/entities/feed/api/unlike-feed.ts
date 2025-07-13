'use server'

import { getTeacherSession } from 'entities/auth'
import { apiClient, errorHandler, HttpError } from 'shared/api'

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  return errorHandler.toast('An error occurred while unliking feed', {
    error,
  })
}

export const unlikeFeed = async (feedId: number) => {
  const { accessToken } = await getTeacherSession()

  try {
    await apiClient.delete<null, null>({
      endpoint: `/feeds/${feedId}/like`,
      option: {
        authorization: `Bearer ${accessToken}`,
      },
      body: null,
    })
  } catch (error) {
    return handleError(error as Error)
  }
}
