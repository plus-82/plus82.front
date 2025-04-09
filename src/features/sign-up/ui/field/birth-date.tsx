import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

import { birthDate as birthDateRule } from '../../model/rules'

export const BirthDate = () => {
  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>Birth</Label>
      <Form.Control name="birthDate" rules={birthDateRule}>
        <Form.DatePicker placeholder="Choose your birth" />
        <Form.ErrorMessage />
      </Form.Control>
    </div>
  )
}
