'use client'

import { useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import {
  EmailVerificationCodeExceptionCode,
  HttpError,
  ResourceNotFoundExceptionCode,
  UserExceptionCode,
} from 'shared/api'
import { isEmptyString } from 'shared/lib'
import { Button, Heading, HelperText, Label } from 'shared/ui'

import { Form, hasError } from 'features/form'

import { useRequestVerification } from '../../api/use-request-verification'
import { useVerifyCode } from '../../api/use-verify-code'
import { FormValues } from '../../model/form-values'
import * as rules from '../../model/rules'
import {
  isCorrectLength,
  hasLowercaseAndUppercaseLetter,
  hasNumber,
  hasSpecialChar,
} from '../../model/rules'
import * as commonCss from '../../style/variants'

import * as css from './variants'

export const Account = () => {
  const {
    trigger,
    getValues,
    setError,
    formState: { errors },
    control,
  } = useFormContext<FormValues>()

  const emailRef = useRef('')

  const [email, password] = useWatch({
    name: ['email', 'password'],
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

  const checkPasswordCondition = (condition: (value: string) => boolean) => {
    if (isEmptyString(password)) return 'default'
    if (condition(password)) return 'success'

    return 'error'
  }

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
              <Form.Control name="email" rules={rules.email}>
                <Form.TextField
                  placeholder="example@email.com"
                  autoComplete="one-time-code"
                  fullWidth
                />
                <Form.ErrorMessage />
              </Form.Control>
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
                <Form.Control name="code" rules={rules.code}>
                  <Form.TextField placeholder="Enter the code" fullWidth />
                  <Form.ErrorMessage />
                </Form.Control>
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
            <Form.PasswordField
              name="password"
              rules={rules.password}
              placeholder="Enter the password"
              autoComplete="one-time-code"
              showToggle
            />
            <HelperText
              hasIcon
              variant={checkPasswordCondition(isCorrectLength)}
            >
              9 ~ 28 characters long
            </HelperText>
            <HelperText
              hasIcon
              variant={checkPasswordCondition(hasLowercaseAndUppercaseLetter)}
            >
              Upper & lower case letters
            </HelperText>
            <HelperText hasIcon variant={checkPasswordCondition(hasNumber)}>
              At least one number
            </HelperText>
            <HelperText
              hasIcon
              variant={checkPasswordCondition(hasSpecialChar)}
            >
              At least special character
            </HelperText>
          </div>
        </div>

        <div className={commonCss.field()}>
          <Label required>Confirm Password</Label>
          <Form.Control name="confirmPassword" rules={rules.confirmPassword}>
            <Form.PasswordField
              placeholder="Check the password"
              autoComplete="one-time-code"
              showToggle
            />
            <Form.ErrorMessage />
          </Form.Control>
        </div>
      </div>
    </div>
  )
}
