import { apiClient } from 'shared/api'
import type { Pagination } from 'shared/api'
import { getCookie } from 'shared/server-lib'

import { Resume } from '../model/resume'

type GetResumesResponse = Pagination<Resume>

export const getResumes = async () => {
  const accessToken = await getCookie('accessToken')

  const response = await apiClient.get<GetResumesResponse>({
    endpoint: '/resumes/me',
    queryParams: {
      rowCount: 100,
    },
    option: {
      authorization: `Bearer ${accessToken}`,
      tags: ['resumes'],
    },
  })

  return response
}

export const getResumeCount = async () => {
  const accessToken = await getCookie('accessToken')

  const response = await apiClient.get<GetResumesResponse>({
    endpoint: '/resumes/me',
    queryParams: {
      rowCount: 100,
    },
    option: {
      authorization: `Bearer ${accessToken}`,
      tags: ['resumes'],
    },
  })

  return response.numberOfElements
}
