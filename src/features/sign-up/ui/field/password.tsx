import { useFormContext, useWatch } from 'react-hook-form'

import { fieldCss, Form } from 'shared/form'
import { isEmptyString } from 'shared/lib'
import { HelperText, Label } from 'shared/ui'

import { FormValues } from '../../model/form-values'
import {
  hasLowercaseAndUppercaseLetter,
  hasNumber,
  hasSpecialChar,
  isCorrectLength,
  password as passwordRule,
} from '../../model/rules'

export const Password = () => {
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
    <div className={fieldCss.fieldWrapper()}>
      <Label required>Password</Label>
      <div className={fieldCss.passwordFieldWrapper()}>
        <Form.PasswordField
          name="password"
          rules={passwordRule}
          placeholder="Enter the password"
          autoComplete="one-time-code"
          showToggle
        />
        <HelperText hasIcon variant={checkPasswordCondition(isCorrectLength)}>
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
        <HelperText hasIcon variant={checkPasswordCondition(hasSpecialChar)}>
          At least special character
        </HelperText>
      </div>
    </div>
  )
}
