'use client'

import { FormProvider, useForm } from 'react-hook-form'

import {
  Button,
  Checkbox,
  DatePicker,
  Heading,
  HelperText,
  Label,
  Layout,
  Link,
  PasswordField,
  Radio,
  Select,
  TextField,
} from 'shared/ui'

import { FormValues, defaultValues } from '../../model/form-values'

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
      <FormProvider {...form}>
        <form>
          <div className="mb-[50px]">
            <Heading as="h3" size="medium" className="mb-6">
              Account
            </Heading>
            <div>
              <div className={css.field()}>
                <Label required>Email</Label>
                <div className={css.textFieldWrapper()}>
                  <TextField
                    placeholder="example@email.com"
                    autoComplete="one-time-code"
                  />
                  <Button variant="lined" size="large">
                    Code
                  </Button>
                </div>
              </div>
              <div className={css.field()}>
                <Label required>Password</Label>
                <div className={css.passwordFieldWrapper()}>
                  <PasswordField
                    placeholder="Enter the password"
                    autoComplete="one-time-code"
                  />
                  <HelperText hasIcon>9 ~ 28 characters long</HelperText>
                  <HelperText hasIcon>
                    Consist of a combination of three types of Upper & lower
                    case letters, Numbers, and Special characters
                  </HelperText>
                </div>
              </div>
              <div className={css.field()}>
                <Label required>Confirm Password</Label>
                <div>
                  <TextField placeholder="Check the password" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <Heading as="h3" size="medium" className="mb-6">
              Personal information
            </Heading>
            <div>
              <div className={css.field()}>
                <Label required>Full Name</Label>
                <div>
                  <TextField placeholder="Enter your name" />
                </div>
              </div>
              <div className={css.field()}>
                <Label required>Nationality</Label>
                <div>
                  <Select
                    onChange={() => {}}
                    placeholder="Choose your nationality"
                  >
                    <Select.Item value="Korea">Korea</Select.Item>
                  </Select>
                </div>
              </div>
              <div className={css.field()}>
                <Label required>Gender</Label>
                <div className={css.radioFieldWrapper()}>
                  <Radio label="Female" value="Female" checked={true} />
                  <Radio label="Male" value="Male" />
                </div>
              </div>
              <div className={css.field()}>
                <Label required>Birth</Label>
                <div>
                  <DatePicker
                    onChange={() => {}}
                    placeholder="Choose your birth"
                  />
                </div>
              </div>
            </div>
          </div>
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
        </form>
      </FormProvider>
    </Layout>
  )
}
