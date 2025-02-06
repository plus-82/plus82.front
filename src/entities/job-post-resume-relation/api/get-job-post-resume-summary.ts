import { apiClient } from 'shared/api'
import { getCookie } from 'shared/server-lib'

import { StatusSummary } from '../model/status'

type GetJobPostResumeSummaryResponse = StatusSummary

export const getJobPostResumeSummary = async () => {
  const accessToken = await getCookie('accessToken')

  const response = await apiClient.get<GetJobPostResumeSummaryResponse>({
    endpoint: `/job-post-resume-relations/summary`,
    option: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}
