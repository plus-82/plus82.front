import { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from 'shared/lib'
import { button, ButtonVariants } from 'shared/ui/button/variants'

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    children: ReactNode
  }

export const Button = ({ variant, size, ...restProps }: Props) => {
  return <button className={cn(button({ variant, size }))} {...restProps} />
}
