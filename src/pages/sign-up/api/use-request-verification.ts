import { useMutation } from '@tanstack/react-query'

import { requestVerification } from 'entities/auth'

export const useRequestVerification = () => {
  return useMutation({
    mutationFn: requestVerification,
  })
}
