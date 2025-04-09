import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

export const AcademyNameEn = () => {
  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>학원 이름(영어)</Label>
      <Form.Control name="academyNameEn">
        <Form.TextField placeholder="영어로 입력해 주세요" />
        <Form.ErrorMessage />
      </Form.Control>
    </div>
  )
}
