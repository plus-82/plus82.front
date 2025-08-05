'use server'

import { getTeacherSession } from 'entities/auth'
import { apiClient, errorHandler, HttpError } from 'shared/api'

type ReportUserRequest = {
  userId: number
  reason: string
  otherReason: string
}

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  return errorHandler.toast('An error occurred while adding feed', {
    error,
  })
}

export const reportUser = async ({ userId, ...body }: ReportUserRequest) => {
  const { accessToken } = await getTeacherSession()

  try {
    await apiClient.post<null, Omit<ReportUserRequest, 'userId'>>({
      endpoint: `/reports/users/${userId}`,
      option: {
        authorization: `Bearer ${accessToken}`,
      },
      body,
    })
  } catch (error) {
    return handleError(error as Error)
  }
}
