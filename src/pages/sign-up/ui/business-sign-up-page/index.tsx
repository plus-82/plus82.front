'use client'

import { useForm } from 'react-hook-form'

import {
  AcademyName,
  AcademyNameEn,
  BirthDate,
  FullName,
  Gender,
  RepresentativeName,
  BusinessRegistrationNumber,
  Address,
} from 'features/sign-up'
import { Email, Password, ConfirmPassword } from 'features/sign-up'
import { Form } from 'shared/form'
import { useCheckbox } from 'shared/lib'
import {
  Button,
  Checkbox,
  Heading,
  Layout,
  Link,
  linkVariants,
} from 'shared/ui'

import { FormValues, defaultValues } from '../../model/form-values'

export const BusinessSignUpPage = () => {
  const form = useForm<FormValues>({
    defaultValues,
    reValidateMode: 'onSubmit',
  })

  const { isChecked, getCheckboxProps } = useCheckbox({ options: ['checked'] })

  return (
    <Layout>
      <div className="mb-[30px] flex flex-col items-center gap-1">
        <h1 className="display-small font-bold text-gray-900">Sign Up</h1>
        <div className="body-large flex items-center gap-1 text-gray-700">
          <p>Have an account?</p>
          <Link href="/sign-in">Sign In</Link>
        </div>
      </div>
      <Form {...form}>
        <div className="mb-[50px]">
          <Heading as="h3" size="medium" className="mb-6">
            Account
          </Heading>
          <div>
            <Email />
            <Password />
            <ConfirmPassword />
            <FullName />
            <Gender />
            <BirthDate />
          </div>
        </div>
        <div className="mb-10">
          <Heading as="h3" size="medium" className="mb-6">
            학원 정보
          </Heading>
          <div>
            <RepresentativeName />
            <AcademyName />
            <AcademyNameEn />
            <Address />
            <BusinessRegistrationNumber />
          </div>
        </div>
        <Checkbox
          {...getCheckboxProps('checked')}
          className="mb-4"
          label={className => (
            <p className={className}>
              <a
                href="/terms-and-conditions-of-use"
                target="_blank"
                onClick={event => {
                  event.stopPropagation()
                }}
                className={linkVariants({ variant: 'secondary' })}
              >
                개인정보 수집 및 이용 정책과 이용 약관
              </a>
              에 동의합니다.
            </p>
          )}
        />
        <Button size="large" fullWidth disabled={!isChecked('checked')}>
          Sign Up
        </Button>
      </Form>
    </Layout>
  )
}
