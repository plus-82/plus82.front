import { useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'

import {
  EmailVerificationCodeExceptionCode,
  HttpError,
  ResourceNotFoundExceptionCode,
  UserExceptionCode,
} from 'shared/api'
import { fieldCss, Form, hasError } from 'shared/form'
import { Button, HelperText, Label } from 'shared/ui'

import { useRequestVerification } from '../../api/use-request-verification'
import { useVerifyCode } from '../../api/use-verify-code'
import { FormValues } from '../../model/form-values'
import { email as emailRule, code as codeRule } from '../../model/rules'

export const Email = () => {
  const [showVerificationField, setShowVerificationField] = useState(false)

  const {
    trigger,
    getValues,
    setError,
    formState: { errors },
    reset,
    control,
  } = useFormContext<FormValues>()

  const email = useWatch({
    name: 'email',
    control,
  })

  const requestVerification = useRequestVerification()
  const verifyCode = useVerifyCode()

  const handleEmailChange = () => {
    if (!(requestVerification.isPending || requestVerification.isIdle)) {
      requestVerification.reset()
    }

    if (!(verifyCode.isPending || verifyCode.isIdle)) {
      verifyCode.reset()
      reset({ ...getValues(), code: '' })
    }
  }

  const handleRequestVerificationSuccess = () => {
    toast.success('A verification email has been sent')

    if (!showVerificationField) setShowVerificationField(true)
  }

  const handleRequestVerificationError = (error: HttpError) => {
    if (error.code === EmailVerificationCodeExceptionCode.TOO_MANY_REQUEST) {
      toast.error(
        'You have requested the verification code too many times. Please try again in 10 minutes.',
      )
    } else if (error.code === UserExceptionCode.ALREADY_USED_EMAIL) {
      setError('email', {
        message: 'An account with that email already exists',
      })
    } else {
      toast.error('An error occurred while requesting verification')
    }
  }

  const handleSendButtonClick = async () => {
    const isEmailValid = await trigger('email')

    if (!isEmailValid) return

    const data = { email }

    requestVerification.mutate(data, {
      onSuccess: handleRequestVerificationSuccess,
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

    if (requestVerification.isPending || requestVerification.isIdle) {
      setError('email', {
        message: 'Please verify the email first',
      })

      return
    }

    const data = { email, code: getValues('code') }

    verifyCode.mutate(data, {
      onError: handleVerifyCodeError,
    })
  }

  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>Email</Label>
      <div className={fieldCss.textFieldWrapper()}>
        <div className={fieldCss.field({ className: 'grow' })}>
          <Form.Control name="email" rules={emailRule}>
            <Form.TextField
              onChange={handleEmailChange}
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
          onClick={handleSendButtonClick}
          disabled={requestVerification.isSuccess}
          className="w-[95px]"
        >
          Send
        </Button>
      </div>

      {showVerificationField && (
        <div className={fieldCss.textFieldWrapper()}>
          <div className={fieldCss.field({ className: 'grow' })}>
            <Form.Control name="code" rules={codeRule}>
              <Form.TextField
                placeholder="Enter the verification code"
                readOnly={verifyCode.isSuccess}
                fullWidth
              />
              <Form.ErrorMessage />
            </Form.Control>
            {!hasError(errors?.code) && verifyCode.isSuccess && (
              <HelperText variant="success">
                Authentication completed
              </HelperText>
            )}
            {!hasError(errors?.code) && !verifyCode.isSuccess && (
              <HelperText>Please enter the code sent to the email</HelperText>
            )}
          </div>
          <Button
            variant="lined"
            size="large"
            onClick={handleCheckButtonClick}
            className="w-[95px] shrink-0"
            disabled={verifyCode.isSuccess}
          >
            Verify
          </Button>
        </div>
      )}
    </div>
  )
}
