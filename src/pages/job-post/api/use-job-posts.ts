import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { GetJobPostsRequest, jobPostQueries } from 'entities/job-post'

export const useJobPosts = (params: GetJobPostsRequest) => {
  return useSuspenseInfiniteQuery({
    ...jobPostQueries.list(params),
    select: data => data?.pages.flatMap(page => page.content),
  })
}
