'use server'

import { apiClient, AuthExceptionCode, HttpError } from 'shared/api'

type SignInRequest = {
  email: string
  password: string
}

type SignInResponse = {
  accessToken: string
}

const handleSuccess = (accessToken: string) => {
  return { accessToken }
}

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  if (error.code === AuthExceptionCode.EMAIL_NOT_CORRECT) {
    return {
      type: 'toast',
      message: "We couldn't find an account with that email",
    }
  } else if (error.code === AuthExceptionCode.PW_NOT_CORRECT) {
    return {
      type: 'form',
      field: 'password',
      message: 'The password you entered is incorrect',
    }
  } else if (error.code === AuthExceptionCode.DELETED_USER) {
    return {
      type: 'toast',
      message: 'This account has been deactivated',
    }
  } else {
    return {
      type: 'toast',
      message: error.message || 'An error occurred while signing in',
    }
  }
}

export const signIn = async (data: SignInRequest) => {
  try {
    const response = await apiClient.post<SignInResponse, SignInRequest>({
      endpoint: '/auth/sign-in',
      body: data,
    })

    const { accessToken } = response

    return handleSuccess(accessToken)
  } catch (error) {
    return handleError(error as Error)
  }
}
