'use server'

import { apiClient } from 'shared/api'
import { getCookie } from 'shared/server-lib'

import { Resume } from '../model/resume'

type GetResumeResponse = Resume

export const getResume = async (resumeId: string) => {
  const accessToken = await getCookie('accessToken')

  const response = await apiClient.get<GetResumeResponse>({
    endpoint: `/resumes/${resumeId}`,
    option: {
      authorization: `Bearer ${accessToken}`,
      tags: ['resume'],
    },
  })

  return response
}
