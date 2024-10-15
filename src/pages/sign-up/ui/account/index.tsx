'use client'

import { useFormContext } from 'react-hook-form'

import {
  EmailVerificationCodeExceptionCode,
  HttpError,
  UserExceptionCode,
} from 'shared/api'
import { hasError } from 'shared/lib'
import {
  Button,
  Heading,
  HelperText,
  Label,
  PasswordField,
  TextField,
} from 'shared/ui'

import { useRequestVerification } from '../../api/use-request-verification'
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
  } = useFormContext<FormValues>()

  const requestVerification = useRequestVerification()

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

    const data = { email: getValues('email') }

    requestVerification.mutate(data, {
      onError: handleRequestVerificationError,
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
              disabled={requestVerification.isSuccess}
              className="w-[95px]"
            >
              Code
            </Button>
          </div>
          {requestVerification.isSuccess && (
            <div className={css.textFieldWrapper()}>
              <div className={commonCss.field({ className: 'grow' })}>
                <TextField
                  {...register('code')}
                  placeholder="Enter the code"
                  error={hasError(errors?.email)}
                  fullWidth
                />
                <HelperText>Please enter the code sent to the email</HelperText>
              </div>
              <Button
                variant="lined"
                size="large"
                onClick={handleCodeButtonClick}
                className="w-[95px]"
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
