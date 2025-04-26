'use server'

import { getBusinessSession, getTeacherSession } from 'entities/auth'
import { apiClient, Pagination, PaginationParams } from 'shared/api'

import { JobPostRelation } from '../model/application'
import { ApplicationStatus } from '../model/status'

export type GetJobPostResumeRequest = PaginationParams<{
  status?: ApplicationStatus
}>

type GetJobPostResumeResponse = Pagination<JobPostRelation>

export const getTeacherJobPostResumeRelations = async (
  queryParams: GetJobPostResumeRequest,
) => {
  const { accessToken } = await getTeacherSession()

  const response = await apiClient.get<GetJobPostResumeResponse>({
    endpoint: '/job-post-resume-relations',
    queryParams,
    option: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}

export const getBusinessJobPostResumeRelations = async (
  queryParams: GetJobPostResumeRequest,
) => {
  const { accessToken } = await getBusinessSession()

  console.log(accessToken)

  const response = await apiClient.get<GetJobPostResumeResponse>({
    endpoint: '/job-post-resume-relations',
    queryParams,
    option: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}
