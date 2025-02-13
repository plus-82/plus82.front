'use server'

import { redirect } from 'next/navigation'

import { apiClient, HttpError } from 'shared/api'
import { getCookie } from 'shared/server-lib'

import { CreateResume } from '../model/resume'

type CreateResumeRequest = CreateResume

const handleSuccess = () => {
  redirect('/setting/resume')
}

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  return {
    type: 'toast',
    message: error.message || 'An error occurred while uploading resume file',
  }
}

export const createResume = async (data: CreateResumeRequest) => {
  const accessToken = await getCookie('accessToken')

  try {
    await apiClient.post<null, CreateResumeRequest>({
      endpoint: '/resumes',
      option: {
        authorization: `Bearer ${accessToken}`,
      },
      body: data,
    })

    handleSuccess()
  } catch (error) {
    return handleError(error as Error)
  }
}
