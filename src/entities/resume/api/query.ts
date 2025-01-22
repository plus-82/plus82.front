import { queryOptions } from '@tanstack/react-query'

import { getResumes } from './get-resumes'

export const resumeQueries = {
  all: () => ['resume'],
  lists: () => [...resumeQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...resumeQueries.lists()],
      queryFn: () => getResumes(),
      staleTime: 5000,
    }),
}
