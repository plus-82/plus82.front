'use client'

import { useMemo } from 'react'

import { useCoverLetter } from '../model/use-cover-letter'
import { useSelectResume } from '../model/use-select-resume'

import { ApplyButton } from './apply-button'
import { CoverLetterForm } from './cover-letter-form'
import { ResumeList } from './resume-list'

export const ApplyForm = () => {
  const { coverLetter, handleCoverLetterChange } = useCoverLetter()
  const { selectedResumeId, changeSelectedResumeId } = useSelectResume()

  const formValues = useMemo(() => {
    return {
      coverLetter,
      selectedResumeId,
    }
  }, [coverLetter, selectedResumeId])

  return (
    <>
      <ResumeList
        selectedResumeId={selectedResumeId}
        onSelect={changeSelectedResumeId}
      />
      <CoverLetterForm
        coverLetter={coverLetter}
        onChange={handleCoverLetterChange}
      />
      <ApplyButton formValues={formValues} />
    </>
  )
}
