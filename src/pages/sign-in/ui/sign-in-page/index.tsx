'use client'

import { useForm } from 'react-hook-form'

import { hasError } from 'shared/lib'
import { Button, Label, Layout, Link, TextField } from 'shared/ui'

import * as css from './variants'

interface SignInFieldValues {
  email: string
  password: string
}

export const SignInPage = () => {
  const { register, getFieldState } = useForm<SignInFieldValues>()

  return (
    <Layout className={css.layout()}>
      <h1 className={css.heading()}>Login</h1>
      <form onSubmit={event => event.preventDefault()}>
        <div className={css.fields()}>
          <div className={css.field()}>
            <Label>Email</Label>
            <TextField
              {...register('email', { required: true })}
              placeholder="Please enter your email"
              error={hasError(getFieldState('email').error)}
            />
          </div>
          <div className={css.field()}>
            <Label>Password</Label>
            <TextField
              {...register('password', { required: true })}
              type="password"
              placeholder="Please enter your password"
              error={hasError(getFieldState('password').error)}
            />
          </div>
        </div>
        <div className={css.buttonGroup()}>
          <Button size="large" fullWidth>
            Sign In
          </Button>
          <Link href="/" variant="tertiary">
            Password forgot
          </Link>
        </div>
      </form>
      <div className={css.footer()}>
        <p>Not a member yet?</p>
        <Link href="/">Create an account</Link>
      </div>
    </Layout>
  )
}
