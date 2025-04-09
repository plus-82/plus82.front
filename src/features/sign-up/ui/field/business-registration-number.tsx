import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

export const BusinessRegistrationNumber = () => {
  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>사업자 등록번호</Label>
      <Form.Control name="businessRegistrationNumber">
        <Form.TextField placeholder="10자리 입력 (‘-’ 제외)" />
        <Form.ErrorMessage />
      </Form.Control>
    </div>
  )
}
