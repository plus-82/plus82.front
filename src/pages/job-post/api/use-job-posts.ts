import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { jobPostQueries } from 'entities/job-post'

import { JobPostFilter } from 'features/job-post-filter/model/filter'

import { transformFiltersToParams } from 'pages/job-post/model/transformFiltersToParams'

export const useJobPosts = (filters?: JobPostFilter | null) => {
  const params = transformFiltersToParams(filters)

  return useSuspenseInfiniteQuery({
    ...jobPostQueries.list({ pageNumber: 0, rowCount: 20, ...params }),
    select: data => data?.pages.flatMap(page => page.content),
  })
}
