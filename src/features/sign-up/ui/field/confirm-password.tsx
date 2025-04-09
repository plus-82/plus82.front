import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

import { confirmPassword as confirmPasswordRule } from '../../model/rules'

export const ConfirmPassword = () => {
  return (
    <div className={fieldCss.field()}>
      <Label required>Confirm Password</Label>
      <Form.Control name="confirmPassword" rules={confirmPasswordRule}>
        <Form.PasswordField
          placeholder="Check the password"
          autoComplete="one-time-code"
          showToggle
        />
        <Form.ErrorMessage />
      </Form.Control>
    </div>
  )
}
