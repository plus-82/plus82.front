'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button, Modal } from 'shared/ui'

import { resumeQueries } from 'entities/resume'

import { ApplyForm } from './apply-form'

export const ApplyToJobButton = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = async () => {
    try {
      if (!queryClient.getQueryData(resumeQueries.list().queryKey)) {
        await queryClient.fetchQuery(resumeQueries.list())
      }
      setIsOpen(true)
    } catch (error) {
      // TODO : Error Handling
      router.push('/sign-in')
    }
  }

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <Button type="button" onClick={handleButtonClick}>
        Apply Now
      </Button>
      <Modal.Content className="flex w-[728px] flex-col items-end gap-6">
        <ApplyForm />
      </Modal.Content>
    </Modal>
  )
}
