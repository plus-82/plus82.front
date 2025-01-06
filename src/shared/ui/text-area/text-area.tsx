import { cn } from 'shared/lib'

import * as css from './variants'

type Props = {
  placeholder?: string
  fullWidth?: boolean
  className?: string
}

export const TextArea = ({
  placeholder,
  fullWidth = false,
  className,
}: Props) => {
  return (
    <textarea
      placeholder={placeholder}
      className={cn(css.textarea({ fullWidth }), className)}
    />
  )
}
