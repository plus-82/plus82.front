'use client'

import { useForm } from 'react-hook-form'

import {
  ApplicationStatus,
  ApplicationStatusSelect,
} from 'entities/job-post-resume-relation'
import { Form } from 'shared/form'
import { Button, Separator } from 'shared/ui'

type Props = {
  values: {
    status?: ApplicationStatus
    memo?: string
  }
}

export const ApplicationSidePanel = ({ values }: Props) => {
  const form = useForm({
    values,
  })

  return (
    <div className="h-fit min-h-[329px] w-[250px] shrink-0 rounded-2xl border border-gray-300 p-6">
      <Form {...form}>
        <div className="mb-3 flex h-[38px] items-center gap-2">
          <Form.Control name="status">
            <label className="title-small font-bold text-gray-900">
              현재 채용 단계:
            </label>
            <ApplicationStatusSelect />
          </Form.Control>
        </div>
        <p className="body-large mb-5 font-normal text-gray-900">
          채용 단계를 변경하면 지원자에게 알림으로 결과를 알려줘요
        </p>
        <Separator className="mb-5" />
        <div className="mb-6 flex flex-col gap-2">
          <Form.Control name="memo">
            <label className="title-small font-bold text-gray-900">
              한 줄 메모
            </label>
            <Form.TextArea
              className="body-large placeholder:body-large h-12 border-0 px-0 py-1 font-normal placeholder:font-normal placeholder:underline"
              placeholder="지원자에 대해 기억하고 싶은 점이 있다면 적어주세요 (최대 100자)"
            />
          </Form.Control>
        </div>
        <Button variant="primary" fullWidth size="large">
          저장하기
        </Button>
      </Form>
    </div>
  )
}
