'use client'

import { useForm, useWatch } from 'react-hook-form'

import { fieldCss, Form } from 'shared/form'
import { Button, Label } from 'shared/ui'

import {
  confirmPasswordRules,
  passwordRules,
  PasswordValidation,
} from 'entities/auth'

export const ChangePasswordPage = () => {
  const form = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const [password] = useWatch({
    name: ['password', 'confirmPassword'],
    control: form.control,
  })

  const canSubmit = false

  const submitForm = data => {
    console.log(data)
  }

  return (
    <div className="flex flex-grow justify-center p-10">
      <div className="flex flex-col items-center gap-10">
        <h2 className="title-large font-bold text-gray-900">Change password</h2>
        <Form {...form} className="flex flex-col gap-10">
          <div>
            <div className={fieldCss.fieldWrapper()}>
              <Label>Current pasword</Label>
              <Form.Control name="currentPassword" rules={confirmPasswordRules}>
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
                <PasswordValidation password={password} />
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
