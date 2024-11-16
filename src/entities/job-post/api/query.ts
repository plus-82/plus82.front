import { queryOptions } from '@tanstack/react-query'

import { getJobPosts, type GetJobPostsRequest } from './get-job-posts'

export const jobPostQueries = {
  all: () => ['job-post'],
  lists: () => [...jobPostQueries.all(), 'list'],
  list: (params: GetJobPostsRequest) =>
    queryOptions({
      queryKey: [...jobPostQueries.lists(), params],
      queryFn: () => getJobPosts(params),
    }),
}
