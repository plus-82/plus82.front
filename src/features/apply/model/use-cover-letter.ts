import { ChangeEvent, useState } from 'react'

export const useCoverLetter = () => {
  const [coverLetter, setCoverLetter] = useState('')

  const handleCoverLetterChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCoverLetter(event?.target?.value || '')
  }

  return { coverLetter, handleCoverLetterChange }
}
