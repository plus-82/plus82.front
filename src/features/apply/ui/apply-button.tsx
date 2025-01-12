'use client'

import { isNull } from 'lodash-es'
import { useParams } from 'next/navigation'

import { Button } from 'shared/ui'

import { useApply } from '../model/use-apply'

type Props = {
  formValues: {
    coverLetter: string
    selectedResumeId: number | null
  }
}

type Params = {
  jobPostId: string
}

export const ApplyButton = ({ formValues }: Props) => {
  const params = useParams<Params>()
  const jobPostId = params?.jobPostId as string

  const { apply } = useApply()

  const isDisabled = isNull(formValues.selectedResumeId)

  const handleApplyButtonClick = () => {
    apply({
      jobPostId: Number(jobPostId),
      coverLetter: formValues.coverLetter,
      resumeId: formValues.selectedResumeId!,
    })
  }

  return (
    <Button
      variant="primary"
      size="large"
      onClick={handleApplyButtonClick}
      className="w-[200px]"
      disabled={isDisabled}
    >
      Apply
    </Button>
  )
}
