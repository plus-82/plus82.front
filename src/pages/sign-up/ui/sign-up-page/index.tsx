'use client'

import { FormProvider, useForm } from 'react-hook-form'

import {
  Button,
  Checkbox,
  DatePicker,
  Heading,
  Label,
  Layout,
  Link,
  Radio,
  Select,
  TextField,
} from 'shared/ui'

import { FormValues, defaultValues } from '../../model/form-values'
import * as commonCss from '../../style/variants'
import { Account } from '../account'

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
          <Account />
          <div className="mb-10">
            <Heading as="h3" size="medium" className="mb-6">
              Personal information
            </Heading>
            <div>
              <div className={commonCss.fieldWrapper()}>
                <Label required>Full Name</Label>
                <div>
                  <TextField placeholder="Enter your name" />
                </div>
              </div>
              <div className={commonCss.fieldWrapper()}>
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
              <div className={commonCss.fieldWrapper()}>
                <Label required>Gender</Label>
                <div className={css.radioFieldWrapper()}>
                  <Radio label="Female" value="Female" checked={true} />
                  <Radio label="Male" value="Male" />
                </div>
              </div>
              <div className={commonCss.fieldWrapper()}>
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
