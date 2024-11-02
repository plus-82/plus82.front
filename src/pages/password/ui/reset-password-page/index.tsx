'use client'

import { useForm } from 'react-hook-form'

import { Button, HelperText, Label, Layout } from 'shared/ui'

import { field, fieldWrapper, Form, helperText } from 'features/form'

import * as css from './variants'

export const ResetPasswordPage = () => {
  const form = useForm()

  return (
    <Layout className={css.layout()}>
      <h1 className={css.heading()}>Reset password</h1>
      <Form {...form} className={css.form()}>
        <div>
          <div className={fieldWrapper()}>
            <Label>New password</Label>
            <div className={field()}>
              <Form.PasswordField
                name="password"
                placeholder="Enter the password"
                autoComplete="one-time-code"
                showToggle
              />
              <div className={helperText()}>
                <HelperText hasIcon>9 ~ 28 characters long</HelperText>
                <HelperText hasIcon>Upper & lower case letters</HelperText>
                <HelperText hasIcon>At least one number</HelperText>
                <HelperText hasIcon>At least special character</HelperText>
              </div>
            </div>
          </div>

          <div className={field()}>
            <Label>Confirm new password</Label>
            <Form.Control name="confirmPassword">
              <Form.PasswordField
                placeholder="Check the password"
                autoComplete="one-time-code"
                showToggle
              />
              <Form.ErrorMessage />
            </Form.Control>
          </div>
        </div>
        <Button size="large" fullWidth>
          Reset password
        </Button>
      </Form>
    </Layout>
  )
}
