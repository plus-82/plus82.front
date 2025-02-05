'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'

import {
  AuthExceptionCode,
  HttpError,
  InvalidInputValueExceptionCode,
} from 'shared/api'
import { fieldCss, Form } from 'shared/form'
import { deleteCookie, isEmptyString } from 'shared/lib'
import { Button, Label } from 'shared/ui'

import {
  currentPasswordRules,
  passwordRules,
  PasswordValidation,
} from 'entities/auth'

import { useChangePassword } from '../api/use-change-password'
import {
  changePasswordFormDefaultValues,
  type ChangePasswordFormValues,
} from '../model/form-values'

export const ChangePasswordPage = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const changePassword = useChangePassword()

  const form = useForm<ChangePasswordFormValues>({
    defaultValues: changePasswordFormDefaultValues,
  })

  const [currentPassword, newPassword] = useWatch({
    name: ['currentPassword', 'newPassword'],
    control: form.control,
  })

  const canSubmit =
    !isEmptyString(currentPassword) && !isEmptyString(newPassword)

  const handleChangePasswordSuccess = () => {
    toast.success('Your password has been changed. Please sign in again.')

    queryClient.removeQueries()
    deleteCookie('accessToken')

    router.push('/sign-in')
  }

  const handleChangePasswordError = (error: HttpError) => {
    if (error.code === AuthExceptionCode.PW_NOT_CORRECT) {
      form.setError('currentPassword', {
        message: 'The current password is incorrect',
      })
    } else if (
      error.code === InvalidInputValueExceptionCode.INVALID_INPUT_VALUE
    ) {
      Object.keys(error.data).forEach(key => {
        form.setError(key as keyof ChangePasswordFormValues, {
          message: 'Please check your password',
        })
      })
    }
  }

  const submitForm = (data: ChangePasswordFormValues) => {
    changePassword.mutate(data, {
      onSuccess: handleChangePasswordSuccess,
      onError: handleChangePasswordError,
    })
  }

  return (
    <div className="flex flex-grow justify-center p-10">
      <div className="flex flex-col items-center gap-10">
        <h2 className="title-large font-bold text-gray-900">Change password</h2>
        <Form {...form} className="flex flex-col gap-10">
          <div>
            <div className={fieldCss.fieldWrapper()}>
              <Label>Current pasword</Label>
              <Form.Control name="currentPassword" rules={currentPasswordRules}>
                <Form.PasswordField autoComplete="one-time-code" showToggle />
                <Form.ErrorMessage />
              </Form.Control>
            </div>

            <div className={fieldCss.fieldWrapper()}>
              <Label>New password</Label>
              <div className={fieldCss.field()}>
                <Form.PasswordField
                  name="newPassword"
                  rules={passwordRules}
                  autoComplete="one-time-code"
                  showToggle
                />
                <PasswordValidation password={newPassword} />
              </div>
            </div>
          </div>
          <Button
            size="large"
            fullWidth
            onClick={form.handleSubmit(submitForm)}
            disabled={!canSubmit}
          >
            Change password
          </Button>
        </Form>
      </div>
    </div>
  )
}
