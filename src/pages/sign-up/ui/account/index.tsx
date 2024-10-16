'use client'

import { useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import {
  EmailVerificationCodeExceptionCode,
  HttpError,
  ResourceNotFoundExceptionCode,
  UserExceptionCode,
} from 'shared/api'
import { hasError, isEmptyString } from 'shared/lib'
import {
  Button,
  Heading,
  HelperText,
  Label,
  PasswordField,
  TextField,
} from 'shared/ui'

import { useRequestVerification } from '../../api/use-request-verification'
import { useVerifyCode } from '../../api/use-verify-code'
import { FormValues } from '../../model/form-values'
import * as rules from '../../model/rules'
import * as commonCss from '../../style/variants'

import * as css from './variants'

export const Account = () => {
  const {
    register,
    trigger,
    getValues,
    setError,
    formState: { errors },
    control,
  } = useFormContext<FormValues>()

  const emailRef = useRef('')

  const email = useWatch({
    name: 'email',
    control,
  })

  const requestVerification = useRequestVerification()
  const verifyCode = useVerifyCode()

  // TODO: 정확한 조건 확인 필요
  const isCodeButtonDisabled = (() => {
    let isDisabled = false

    if (!requestVerification.isSuccess) return isDisabled

    isDisabled = !isEmptyString(emailRef.current) && emailRef.current === email

    return isDisabled
  })()

  const handleRequestVerificationError = (error: HttpError) => {
    if (error.code === EmailVerificationCodeExceptionCode.TOO_MANY_REQUEST) {
      // TODO: Show toast message
    } else if (error.code === UserExceptionCode.ALREADY_USED_EMAIL) {
      setError('email', {
        message: 'An account with that email already exists',
      })
    }
  }

  const handleCodeButtonClick = async () => {
    const isEmailValid = await trigger('email')

    if (!isEmailValid) return

    const data = { email }
    emailRef.current = email

    requestVerification.mutate(data, {
      onError: handleRequestVerificationError,
    })
  }

  const handleVerifyCodeError = (error: HttpError) => {
    if (
      error.code === EmailVerificationCodeExceptionCode.ALREADY_VERIFIED_CODE
    ) {
      setError('code', {
        message: 'The verification code you entered has already been used',
      })
    } else if (error.code === EmailVerificationCodeExceptionCode.EXPIRED_CODE) {
      setError('code', {
        message: 'The verification code has expired. Please request a new one.',
      })
    } else if (
      error.code ===
      ResourceNotFoundExceptionCode.EMAIL_VERIFICATION_CODE_NOT_FOUND
    ) {
      setError('code', {
        message: 'The verification code you entered is incorrect',
      })
    }
  }

  const handleCheckButtonClick = async () => {
    const isCodeValid = await trigger('code')

    if (!isCodeValid) return

    const data = { email, code: getValues('code') }

    verifyCode.mutate(data, {
      onError: handleVerifyCodeError,
    })
  }

  return (
    <div className="mb-[50px]">
      <Heading as="h3" size="medium" className="mb-6">
        Account
      </Heading>
      <div>
        <div className={commonCss.fieldWrapper()}>
          <Label required>Email</Label>
          <div className={css.textFieldWrapper()}>
            <div className={commonCss.field({ className: 'grow' })}>
              <TextField
                {...register('email', rules.email)}
                placeholder="example@email.com"
                autoComplete="one-time-code"
                error={hasError(errors?.email)}
                fullWidth
              />
              {hasError(errors?.email) && (
                <HelperText variant="error">{errors.email.message}</HelperText>
              )}
            </div>
            <Button
              variant="lined"
              size="large"
              onClick={handleCodeButtonClick}
              disabled={isCodeButtonDisabled}
              className="w-[95px]"
            >
              Code
            </Button>
          </div>
          {requestVerification.isSuccess && (
            <div className={css.textFieldWrapper()}>
              <div className={commonCss.field({ className: 'grow' })}>
                <TextField
                  {...register('code', rules.code)}
                  placeholder="Enter the code"
                  error={hasError(errors?.code)}
                  fullWidth
                />
                {!hasError(errors?.code) && verifyCode.isSuccess && (
                  <HelperText variant="success">
                    Authentication completed
                  </HelperText>
                )}
                {!hasError(errors?.code) && !verifyCode.isSuccess && (
                  <HelperText>
                    Please enter the code sent to the email
                  </HelperText>
                )}
                {hasError(errors?.code) && (
                  <HelperText variant="error">{errors.code.message}</HelperText>
                )}
              </div>
              <Button
                variant="lined"
                size="large"
                onClick={handleCheckButtonClick}
                className="w-[95px]"
                disabled={verifyCode.isSuccess}
              >
                Check
              </Button>
            </div>
          )}
        </div>
        <div className={commonCss.fieldWrapper()}>
          <Label required>Password</Label>
          <div className={css.passwordFieldWrapper()}>
            <PasswordField
              placeholder="Enter the password"
              autoComplete="one-time-code"
            />
            <HelperText hasIcon>9 ~ 28 characters long</HelperText>
            <HelperText hasIcon>
              Consist of a combination of three types of Upper & lower case
              letters, Numbers, and Special characters
            </HelperText>
          </div>
        </div>
        <div className={commonCss.field()}>
          <Label required>Confirm Password</Label>
          <div>
            <TextField placeholder="Check the password" />
          </div>
        </div>
      </div>
    </div>
  )
}
