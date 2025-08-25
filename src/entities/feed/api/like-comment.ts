'use server'

import { getBusinessSession, getTeacherSession } from 'entities/auth'
import { apiClient, errorHandler, HttpError } from 'shared/api'

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  return errorHandler.toast('An error occurred while liking comment', {
    error,
  })
}

type LikeCommentRequest = {
  commentId: number
  feedId: number
}

export const likeComment = async ({
  commentId,
  feedId,
}: LikeCommentRequest) => {
  const { accessToken } = await getTeacherSession()

  try {
    await apiClient.post<null, null>({
      endpoint: `/feeds/${feedId}/comments/${commentId}/like`,
      option: {
        authorization: `Bearer ${accessToken}`,
      },
      body: null,
    })
  } catch (error) {
    return handleError(error as Error)
  }
}

export const likeBusinessComment = async ({
  commentId,
  feedId,
}: LikeCommentRequest) => {
  const { accessToken } = await getBusinessSession()

  try {
    await apiClient.post<null, null>({
      endpoint: `/feeds/${feedId}/comments/${commentId}/like`,
      option: {
        authorization: `Bearer ${accessToken}`,
      },
      body: null,
    })
  } catch (error) {
    return handleError(error as Error)
  }
}
