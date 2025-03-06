'use server'

import { getSession } from 'entities/auth'
import {
  apiClient,
  ContentType,
  HttpError,
  ResumeExceptionCode,
} from 'shared/api'

import { ResumeDTO } from '../model/resume'

type CreateResumeRequest = ResumeDTO

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  if (error.code === ResumeExceptionCode.REPRESENTATIVE_RESUME_EXISTS) {
    return {
      type: 'toast',
      message: 'You can only have one representative resume',
    }
  }

  return {
    type: 'toast',
    message: error.message || 'An error occurred while uploading resume file',
  }
}

export const createResume = async (data: CreateResumeRequest) => {
  const { accessToken } = await getSession()

  try {
    await apiClient.post<null, CreateResumeRequest>({
      endpoint: '/resumes',
      option: {
        contentType: ContentType.MULTIPART,
        authorization: `Bearer ${accessToken}`,
      },
      body: data,
    })
  } catch (error) {
    return handleError(error as Error)
  }
}
