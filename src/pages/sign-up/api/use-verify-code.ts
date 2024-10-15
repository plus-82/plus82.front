import { useMutation } from '@tanstack/react-query'

import { verifyCode } from 'entities/auth'

export const useVerifyCode = () => {
  return useMutation({
    mutationFn: verifyCode,
  })
}
