'use client'

import { Email, Password } from 'features/sign-up'
import { Form, fieldCss } from 'shared/form'
import { Heading, Label } from 'shared/ui'

import * as rules from '../model/rules'

export const Account = () => {
  return (
    <div className="mb-[50px]">
      <Heading as="h3" size="medium" className="mb-6">
        Account
      </Heading>

      <div>
        <Email />
        <Password />

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
