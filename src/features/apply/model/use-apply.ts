import { toast } from 'react-toastify'

import { HttpError, JobPostExceptionCode } from 'shared/api'
import { useModalContext } from 'shared/ui'

import { useSubmitResume } from '../api/use-submit-resume'

export const useApply = () => {
  const submitResume = useSubmitResume()

  const { changeOpen } = useModalContext()

  const handleApplySuccess = () => {
    if (changeOpen) {
      changeOpen(false)
      toast.success('Your application has been received')
    }
  }

  const handleApplyError = (error: HttpError) => {
    if (error.code === JobPostExceptionCode.JOB_POST_CLOSED) {
      toast.error('This job post is closed')
    } else if (error.code === JobPostExceptionCode.RESUME_ALREADY_SUBMITTED) {
      toast.error('You have already applied for this job post')
    } else {
      toast.error(error.message)
    }
  }

  const apply = (formValues: {
    jobPostId: number
    resumeId: number
    coverLetter: string
  }) => {
    submitResume.mutate(formValues, {
      onSuccess: handleApplySuccess,
      onError: handleApplyError,
    })
  }

  return { apply }
}
