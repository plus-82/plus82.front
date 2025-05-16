import { isEqual } from 'lodash-es'
import { useFormContext, useWatch } from 'react-hook-form'

import { fieldCss, Form } from 'shared/form'
import { Checkbox, Label } from 'shared/ui'

import { FormValues } from '../../model/form-values'
import * as rules from '../../model/rules'

export const StudentType = () => {
  const {
    control,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext<FormValues>()

  const [studentType] = useWatch({
    control,
    name: ['studentType'],
  })

  const studentTypeOptions = [
    'Kindergarten',
    'Elementary',
    'MiddleSchool',
    'HighSchool',
    'Adult',
  ]

  const isAllChecked = isEqual(studentType, studentTypeOptions)

  const handleAllCheckboxClick = () => {
    if (isAllChecked) {
      setValue('studentType', null)
    } else {
      setValue('studentType', studentTypeOptions)
    }

    clearErrors('studentType')
  }

  return (
    <div className={fieldCss.fieldWrapper({ className: 'not-last:mb-8' })}>
      <Label required>대상 학생</Label>
      <div className="flex gap-[30px]">
        <Form.CheckboxGroup
          name="studentType"
          rules={rules.studentType}
          options={studentTypeOptions}
        >
          <Checkbox
            label="전체"
            value="All"
            checked={isAllChecked}
            onChange={handleAllCheckboxClick}
            error={!!errors?.studentType}
          />
          <Form.Checkbox label="유치원" value="Kindergarten" />
          <Form.Checkbox label="초등학생" value="Elementary" />
          <Form.Checkbox label="중학생" value="MiddleSchool" />
          <Form.Checkbox label="고등학생" value="HighSchool" />
          <Form.Checkbox label="성인" value="Adult" />
        </Form.CheckboxGroup>
      </div>
    </div>
  )
}
