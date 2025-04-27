'use server'

import { revalidateTag } from 'next/cache'

import { getBusinessSession } from 'entities/auth'
import { apiClient, errorHandler, HttpError } from 'shared/api'

import { CreateJobPost } from '../model/create-job-post'

type UpdateJobPostRequest = {
  jobPostId: number
  jobPost: CreateJobPost
}

const handleSuccess = () => {
  revalidateTag('business-job-posts')
}

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  return errorHandler.toast('An error occurred while updating job post', {
    error,
  })
}

export const updateJobPost = async ({
  jobPostId,
  jobPost,
}: UpdateJobPostRequest) => {
  const { accessToken } = await getBusinessSession()

  try {
    await apiClient.post<null, CreateJobPost>({
      endpoint: `/job-posts/${jobPostId}`,
      option: {
        authorization: `Bearer ${accessToken}`,
      },
      body: jobPost,
    })

    handleSuccess()
  } catch (error) {
    return handleError(error as Error)
  }
}
