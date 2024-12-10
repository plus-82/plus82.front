'use client'

import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { colors } from 'shared/config'
import { cn } from 'shared/lib'

import { Icon } from '../icon'

type Props = {
  className?: string
  children: ReactNode
}

export const Modal = ({ children, className }: Props) => {
  const router = useRouter()

  const handleClose = () => {
    router.back()
  }

  return (
    <div className="absolute flex h-full w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="flex min-w-80 flex-col rounded-lg border border-gray-300 bg-white p-6 first-line:min-h-32">
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="mb-3 ml-auto block w-fit"
        >
          <Icon name="Close" color={colors.gray[900]} />
        </button>
        <div className={cn('flex-grow', className)}>{children}</div>
      </div>
    </div>
  )
}
