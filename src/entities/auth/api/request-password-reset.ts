'use server'

import {
  apiClient,
  EmailVerificationCodeExceptionCode,
  HttpError,
  ResourceNotFoundExceptionCode,
} from 'shared/api'

type RequestPasswordResetRequest = {
  email: string
}

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  if (error.code === EmailVerificationCodeExceptionCode.TOO_MANY_REQUEST) {
    return {
      type: 'toast',
      message:
        'You have requested too many times. Please try again in 10 minutes.',
    }
  } else if (error.code === ResourceNotFoundExceptionCode.USER_NOT_FOUND) {
    return {
      type: 'toast',
      message: "We couldn't find an account with that email",
    }
  } else {
    return {
      type: 'toast',
      message: 'An error occurred while requesting a password reset',
    }
  }
}

export const requestPasswordReset = async (
  data: RequestPasswordResetRequest,
) => {
  try {
    await apiClient.post<null, RequestPasswordResetRequest>({
      endpoint: '/auth/reset-password/request',
      body: data,
    })
  } catch (error) {
    return handleError(error as Error)
  }
}
