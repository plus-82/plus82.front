import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

export const FullName = () => {
  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>이름</Label>
      <Form.Control name="fullName">
        <Form.TextField placeholder="이름을 입력해 주세요" />
        <Form.ErrorMessage />
      </Form.Control>
    </div>
  )
}
