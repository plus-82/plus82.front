import { apiClient, Pagination, PaginationParams } from 'shared/api'
import { getCookie } from 'shared/lib'

import { JobPostRelation } from '../model/application'
import { ApplicationStatus } from '../model/status'

export type GetJobPostResumeRequest = PaginationParams<{
  status?: ApplicationStatus
}>

type GetJobPostResumeResponse = Pagination<JobPostRelation>

export const getJobPostResumeRelations = async (
  queryParams: GetJobPostResumeRequest,
) => {
  const accessToken = await getCookie('accessToken')

  const response = await apiClient.get<GetJobPostResumeResponse>({
    endpoint: '/job-post-resume-relations',
    queryParams,
    option: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}
