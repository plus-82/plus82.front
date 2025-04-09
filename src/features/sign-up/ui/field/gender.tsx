import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

export const Gender = () => {
  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>Gender</Label>
      <Form.Control name="genderType">
        <Form.RadioGroup className={fieldCss.radioFieldWrapper()}>
          <Form.Radio label="Female" value="FEMALE" />
          <Form.Radio label="Male" value="MALE" />
        </Form.RadioGroup>
      </Form.Control>
    </div>
  )
}
