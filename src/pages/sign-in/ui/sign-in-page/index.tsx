'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { AuthExceptionCode, HttpError } from 'shared/api'
import { hasError } from 'shared/lib'
import { Button, HelperText, Label, Layout, Link, TextField } from 'shared/ui'

import { useSignIn } from '../../api/use-sign-in'

import * as css from './variants'

interface FormValues {
  email: string
  password: string
}

const defaultValues: FormValues = {
  email: '',
  password: '',
}

export const SignInPage = () => {
  const router = useRouter()

  const { register, handleSubmit, getFieldState, setError } =
    useForm<FormValues>({
      defaultValues,
      reValidateMode: 'onSubmit',
    })

  const signIn = useSignIn()

  const handleSignInSuccess = () => {
    router.replace('/')
  }

  const handleSignInError = (error: HttpError) => {
    if (error.code === AuthExceptionCode.EMAIL_NOT_CORRECT) {
      setError('email', {
        message: 'You do not have a history of signing up for this email',
      })
    } else if (error.code === AuthExceptionCode.PW_NOT_CORRECT) {
      setError('password', {
        message:
          'The password does not appear to be correct. Please check again.',
      })
    }
  }

  const handleFormValid = (data: FormValues) => {
    signIn.mutate(data, {
      onSuccess: handleSignInSuccess,
      onError: handleSignInError,
    })
  }

  return (
    <Layout className={css.layout()}>
      <h1 className={css.heading()}>Login</h1>
      <form onSubmit={event => event.preventDefault()}>
        <div className={css.fields()}>
          <div className={css.field()}>
            <Label>Email</Label>
            <TextField
              {...register('email', { required: true })}
              error={hasError(getFieldState('email').error)}
            />
            {hasError(getFieldState('email').error) && (
              <HelperText variant="error">
                {getFieldState('email').error?.message}
              </HelperText>
            )}
          </div>
          <div className={css.field()}>
            <Label>Password</Label>
            <TextField
              {...register('password', { required: true })}
              type="password"
              error={hasError(getFieldState('password').error)}
            />
            {hasError(getFieldState('password').error) && (
              <HelperText variant="error">
                {getFieldState('password').error?.message}
              </HelperText>
            )}
          </div>
        </div>
        <div className={css.buttonGroup()}>
          <Button
            size="large"
            fullWidth
            onClick={handleSubmit(handleFormValid)}
          >
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
