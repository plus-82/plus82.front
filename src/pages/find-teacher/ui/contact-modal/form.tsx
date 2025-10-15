import { useForm } from 'react-hook-form'

import { fieldCss, Form } from 'shared/form'
import { Button, Label, Modal } from 'shared/ui'

type FormValues = {
  field1: string
  field2: string
  field3: string
  field4: string
}

const defaultValues: FormValues = {
  field1: '',
  field2: '',
  field3: '',
  field4: '',
}

type Props = {
  teacherName: string
  academyName: string
  onSuccess: () => void
}

export const ContactForm = ({ teacherName, academyName, onSuccess }: Props) => {
  const form = useForm<FormValues>({
    defaultValues,
  })

  return (
    <Form {...form} className="flex w-full flex-grow flex-col px-6">
      <p className="title-small mb-4 font-medium text-gray-900">
        Hello {teacherName},<br />
        {academyName} has reviewed your resume and would like to get in touch
        with you.
      </p>
      <div className="mb-4 flex flex-col space-y-1.5">
        <Label>
          Reason for interest :
          <br />
          {teacherName}님께 관심이 생긴 이유
        </Label>
        <Form.Control name="field1">
          <Form.TextArea
            placeholder="이유를 작성해 주세요"
            className="h-[108px] py-3"
          />
        </Form.Control>
      </div>
      <div className="mb-4 flex flex-col space-y-1.5">
        <Label>
          Why you might be interested :
          <br />
          {teacherName}님이 우리 학원에 관심을 가질 만한 이유
        </Label>
        <Form.Control name="field1">
          <Form.TextArea
            placeholder="이유를 작성해 주세요"
            className="h-[108px] py-3"
          />
        </Form.Control>
      </div>
      <div className="mb-4 flex flex-col space-y-1.5">
        <Label>
          Additional message :
          <br />
          {teacherName}님께 추가로 하고 싶은 말
        </Label>
        <Form.Control name="field1">
          <Form.TextArea
            placeholder="하고 싶은 말을 작성해 주세요"
            className="h-[108px] py-3"
          />
        </Form.Control>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label>연락 가능한 이메일</Label>
        <Form.Control name="field4">
          <Form.TextField placeholder="이메일을 입력해 주세요" fullWidth />
        </Form.Control>
      </div>
      <Modal.Footer className="py-8">
        <Button size="large">보내기</Button>
      </Modal.Footer>
    </Form>
  )
}
