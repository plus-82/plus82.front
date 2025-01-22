import { useSuspenseQuery } from '@tanstack/react-query'

import { jobPostQueries } from 'entities/job-post/api/query'

export const useJobPost = (jobPostId: number) => {
  return useSuspenseQuery({
    ...jobPostQueries.detail(jobPostId),
  })
}
