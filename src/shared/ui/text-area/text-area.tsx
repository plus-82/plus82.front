import { ChangeEvent } from 'react'

import { cn } from 'shared/lib'

import * as css from './variants'

type Props = {
  value?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  fullWidth?: boolean
  className?: string
}

export const TextArea = ({
  placeholder,
  fullWidth = false,
  className,
  value,
  onChange,
}: Props) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(css.textarea({ fullWidth }), className)}
    />
  )
}
