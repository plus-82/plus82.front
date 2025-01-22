import { apiClient } from 'shared/api'
import { getCookie } from 'shared/lib'

type SubmitResumeRequest = {
  jobPostId: number
  resumeId: number
  coverLetter: string
}

export const submitResume = async ({
  jobPostId,
  resumeId,
  coverLetter,
}: SubmitResumeRequest) => {
  const accessToken = await getCookie('accessToken')

  const response = await apiClient.post<null>({
    endpoint: `/job-posts/${jobPostId}/submit-resume/${resumeId}`,
    option: {
      authorization: `Bearer ${accessToken}`,
    },
    body: {
      coverLetter,
    },
  })

  return response
}
