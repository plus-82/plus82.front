import { useMutation } from '@tanstack/react-query'

import { submitResume } from 'entities/job-post'

export const useSubmitResume = () => {
  const result = useMutation({
    mutationFn: submitResume,
  })

  return result
}
