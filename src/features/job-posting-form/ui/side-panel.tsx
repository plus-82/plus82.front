import { isEqual } from 'lodash-es'
import { useFormContext, useWatch } from 'react-hook-form'

import { Button } from 'shared/ui'

import {
  canRegisterForm,
  defaultValues,
  FormValues,
} from '../model/form-values'

type Props = {
  type: 'register' | 'update'
  onRegister?: () => void
  onSave?: () => void
}

export const SidePanel = ({ type, onRegister, onSave }: Props) => {
  const { handleSubmit, control, getValues } = useFormContext<FormValues>()

  const [
    title,
    jobDescription,
    salary,
    studentType,
    dueDate,
    noExpirationDate,
  ] = useWatch({
    control,
    name: [
      'title',
      'jobDescription',
      'salary',
      'studentType',
      'dueDate',
      'noExpirationDate',
    ],
  })

  const canSave = isEqual(getValues(), defaultValues)

  const submitForm = handleSubmit(() => {
    onRegister?.()
  })

  return (
    <div className="h-fit w-[340px] shrink-0 rounded-2xl border border-gray-300 p-6">
      <p className="body-large mb-2 text-blue-800">
        공고 내용은 영어로 작성해주세요.
      </p>
      <div className="mb-6">
        <p className="body-medium text-gray-700">
          입력한 정보는 검색에 반영돼요.
        </p>
        <p className="body-medium text-gray-700">
          중요한 정보를 빠뜨리지 않았는지 확인해 주세요.
        </p>
      </div>
      <div className="space-y-2">
        <Button
          variant="primary"
          size="large"
          fullWidth
          onClick={submitForm}
          disabled={
            !canRegisterForm({
              title,
              jobDescription,
              salary,
              studentType,
              dueDate,
              noExpirationDate,
            })
          }
        >
          등록하기
        </Button>
        {type === 'register' && (
          <Button
            variant="lined"
            size="large"
            fullWidth
            disabled={canSave}
            onClick={onSave}
          >
            임시 저장
          </Button>
        )}
      </div>
    </div>
  )
}
