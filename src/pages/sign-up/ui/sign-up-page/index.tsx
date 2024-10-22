'use client'

import { useForm } from 'react-hook-form'

import { Button, Checkbox, Layout, Link } from 'shared/ui'

import { Form } from 'features/form'

import { FormValues, defaultValues } from '../../model/form-values'
import { Account } from '../account'
import { PersonalInformation } from '../personal-information'

import * as css from './variants'

export const SignUpPage = () => {
  const form = useForm<FormValues>({
    defaultValues,
    reValidateMode: 'onSubmit',
  })

  return (
    <Layout>
      <h2 className={css.welcomeMessage()}>
        New opportunities await you at Plus82
      </h2>
      <div className={css.headerWrapper()}>
        <h1 className={css.header()}>Sign Up</h1>
        <div className={css.goToSignIn()}>
          <p>Have an account?</p>
          <Link href="/">Sign In</Link>
        </div>
      </div>
      <Form {...form}>
        <Account />
        <PersonalInformation />
        <Checkbox
          className={css.checkbox()}
          label={className => (
            <p className={className}>
              I have read and agree to the Plus 82&apos;s
              <br />
              <Link href="/" variant="secondary">
                Terms and Conditions of Use. (Essential)
              </Link>
            </p>
          )}
        />
        <Button size="large" fullWidth disabled>
          Sign Up
        </Button>
      </Form>
    </Layout>
  )
}
