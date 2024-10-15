import { useMutation } from '@tanstack/react-query'

import { requestVerification } from 'entities/auth/api/request-verification'

export const useRequestVerification = () => {
  return useMutation({
    mutationFn: requestVerification,
  })
}
