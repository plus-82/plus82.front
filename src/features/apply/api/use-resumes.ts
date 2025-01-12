import { useQuery } from '@tanstack/react-query'

import { resumeQueries } from 'entities/resume'

export const useResumes = () => {
  const result = useQuery(resumeQueries.list())

  return {
    ...result,
    resumes: result.data?.content ?? [],
  }
}
