import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

export const Description = () => {
  return (
    <div className={fieldCss.fieldWrapper({ className: 'not-last:mb-8' })}>
      <Label required>학원 소개</Label>
      <Form.Control name="description">
        <Form.TextArea
          placeholder="영어로 입력해 주세요"
          fullWidth
          className="h-[128px]"
        />
        <Form.ErrorMessage />
      </Form.Control>
    </div>
  )
}
