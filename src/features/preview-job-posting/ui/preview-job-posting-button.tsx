import { MouseEvent } from 'react'

import { getJobPost } from 'entities/job-post'
import { JobPostDetail } from 'entities/job-post'
import { colors } from 'shared/config'
import { Button, Icon } from 'shared/ui'

import { setPreviewJobPosting } from '../lib/storage'

type Props = {
  type: 'icon' | 'button'
  jobPostId?: number
  onLoad?: () => Promise<JobPostDetail>
  disabled?: boolean
}

export const PreviewJobPostingButton = ({
  type,
  jobPostId,
  onLoad,
  disabled,
}: Props) => {
  const handlePreviewButtonClick = async (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    console.log('PreviewJobPostingButton clicked')
    event.stopPropagation()
    event.preventDefault()

    if (jobPostId) {
      const jobPost = await getJobPost({ jobPostId })
      setPreviewJobPosting(jobPost)
    } else {
      const jobPost = await onLoad?.()
      setPreviewJobPosting(jobPost!)
    }

    window.open('/business/preview/job-posting', '_blank')
  }

  if (type === 'icon') {
    return (
      <button
        className="flex h-10 w-10 items-center justify-center"
        disabled={disabled}
        onClick={handlePreviewButtonClick}
      >
        <Icon name="DocumentSearch" size="large" color={colors.gray[700]} />
      </button>
    )
  }

  return (
    <Button
      type="button"
      variant="lined"
      size="small"
      onClick={handlePreviewButtonClick}
      disabled={disabled}
    >
      <Button.Icon name="DocumentSearch" />
      미리 보기
    </Button>
  )
}
