import { ButtonHTMLAttributes } from 'react'

import { cn } from 'shared/lib'
import { button, ButtonVariants } from 'shared/ui/button/variants'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants

export const Button = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className,
  ...restProps
}: Props) => {
  return (
    <button
      type={type}
      className={cn(button({ variant, size, fullWidth, className }))}
      {...restProps}
    />
  )
}
