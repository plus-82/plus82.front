import { useState } from 'react'

export const useSelectResume = () => {
  const [selectedResumeId, setSelectedResumeId] = useState<number | null>(null)

  const changeSelectedResumeId = (id: number) => {
    if (selectedResumeId === id) {
      setSelectedResumeId(null)
    } else {
      setSelectedResumeId(id)
    }
  }

  return {
    selectedResumeId,
    changeSelectedResumeId,
  }
}
