'use client'

import { ChangeEvent, useState } from 'react'

import { Button, TextArea } from 'shared/ui'

export const MAX_LENGTH = 200

type Props = {
  onSubmit: (comment: string) => void
}

export const CommentForm = ({ onSubmit }: Props) => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  const handleSubmit = () => {
    onSubmit(value)
    setValue('')
  }

  return (
    <div className="relative flex h-[128px] flex-col items-end gap-2 rounded-lg bg-gray-100 p-3">
      <TextArea
        value={value}
        onChange={handleChange}
        placeholder="Enter a comment"
        fullWidth
        className="body-large h-full cursor-text overflow-scroll rounded-lg border-none bg-gray-100 p-0"
        maxLength={MAX_LENGTH}
      />
      <div className="flex items-center gap-2">
        <span className="body-small text-gray-500">
          {value.length}/{MAX_LENGTH}
        </span>
        <Button
          variant="primary"
          size="small"
          className="w-[62px]"
          onClick={handleSubmit}
        >
          Post
        </Button>
      </div>
    </div>
  )
}
