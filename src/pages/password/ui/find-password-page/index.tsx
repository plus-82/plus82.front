'use client'

import { useForm } from 'react-hook-form'

import { Button, Label, Layout } from 'shared/ui'

import { Form } from 'features/form'

import { defaultValues } from '../../model/form-values'

import * as css from './variants'

export const FindPasswordPage = () => {
  const form = useForm({
    defaultValues,
    reValidateMode: 'onSubmit',
  })

  return (
    <Layout className={css.layout()}>
      <h1 className={css.heading()}>Reset password</h1>
      <Form {...form} className={css.form()}>
        <div className={css.field()}>
          <Label>Email</Label>
          <Form.Control name="email">
            <Form.TextField />
            <Form.ErrorMessage />
          </Form.Control>
        </div>
        <Button size="large" fullWidth>
          Send password reset link
        </Button>
      </Form>
    </Layout>
  )
}
