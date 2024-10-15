'use client'

import { useFormContext } from 'react-hook-form'

import { hasError } from 'shared/lib'
import {
  Button,
  Heading,
  HelperText,
  Label,
  PasswordField,
  TextField,
} from 'shared/ui'

import { FormValues } from '../../model/form-values'
import * as rules from '../../model/rules'
import * as commonCss from '../../style/variants'

import * as css from './variants'

export const Account = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <div className="mb-[50px]">
      <Heading as="h3" size="medium" className="mb-6">
        Account
      </Heading>
      <div>
        <div className={commonCss.fieldWrapper()}>
          <Label required>Email</Label>
          <div className={css.textFieldWrapper()}>
            <div className={commonCss.field({ className: 'grow' })}>
              <TextField
                {...register('email', rules.email)}
                placeholder="example@email.com"
                autoComplete="one-time-code"
                error={hasError(errors?.email)}
                fullWidth
              />
              {hasError(errors?.email) && (
                <HelperText variant="error">{errors.email.message}</HelperText>
              )}
            </div>
            <Button variant="lined" size="large">
              Code
            </Button>
          </div>
        </div>
        <div className={commonCss.fieldWrapper()}>
          <Label required>Password</Label>
          <div className={css.passwordFieldWrapper()}>
            <PasswordField
              placeholder="Enter the password"
              autoComplete="one-time-code"
            />
            <HelperText hasIcon>9 ~ 28 characters long</HelperText>
            <HelperText hasIcon>
              Consist of a combination of three types of Upper & lower case
              letters, Numbers, and Special characters
            </HelperText>
          </div>
        </div>
        <div className={commonCss.field()}>
          <Label required>Confirm Password</Label>
          <div>
            <TextField placeholder="Check the password" />
          </div>
        </div>
      </div>
    </div>
  )
}
