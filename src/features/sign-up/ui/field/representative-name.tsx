import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

export const RepresentativeName = () => {
  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>대표자명</Label>
      <Form.Control name="representativeName">
        <Form.TextField placeholder="이름을 입력해 주세요" />
        <Form.ErrorMessage />
      </Form.Control>
    </div>
  )
}
