'use client'

import { useFormContext, useWatch } from 'react-hook-form'

import { Email } from 'features/sign-up'
import { Form, fieldCss } from 'shared/form'
import { isEmptyString } from 'shared/lib'
import { Heading, HelperText, Label } from 'shared/ui'

import { FormValues } from '../model/form-values'
import * as rules from '../model/rules'
import {
  isCorrectLength,
  hasLowercaseAndUppercaseLetter,
  hasNumber,
  hasSpecialChar,
} from '../model/rules'

export const Account = () => {
  const { control } = useFormContext<FormValues>()

  const password = useWatch({
    name: 'password',
    control,
  })

  const checkPasswordCondition = (condition: (value: string) => boolean) => {
    if (isEmptyString(password)) return 'default'
    if (condition(password)) return 'success'

    return 'error'
  }

  return (
    <div className="mb-[50px]">
      <Heading as="h3" size="medium" className="mb-6">
        Account
      </Heading>

      <div>
        <Email />

        <div className={fieldCss.fieldWrapper()}>
          <Label required>Password</Label>
          <div className={fieldCss.passwordFieldWrapper()}>
            <Form.PasswordField
              name="password"
              rules={rules.password}
              placeholder="Enter the password"
              autoComplete="one-time-code"
              showToggle
            />
            <HelperText
              hasIcon
              variant={checkPasswordCondition(isCorrectLength)}
            >
              9 ~ 28 characters long
            </HelperText>
            <HelperText
              hasIcon
              variant={checkPasswordCondition(hasLowercaseAndUppercaseLetter)}
            >
              Upper & lower case letters
            </HelperText>
            <HelperText hasIcon variant={checkPasswordCondition(hasNumber)}>
              At least one number
            </HelperText>
            <HelperText
              hasIcon
              variant={checkPasswordCondition(hasSpecialChar)}
            >
              At least special character
            </HelperText>
          </div>
        </div>

        <div className={fieldCss.field()}>
          <Label required>Confirm Password</Label>
          <Form.Control name="confirmPassword" rules={rules.confirmPassword}>
            <Form.PasswordField
              placeholder="Check the password"
              autoComplete="one-time-code"
              showToggle
            />
            <Form.ErrorMessage />
          </Form.Control>
        </div>
      </div>
    </div>
  )
}
