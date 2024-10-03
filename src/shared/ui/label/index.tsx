import { HTMLAttributes } from 'react'

import { cn } from 'shared/lib'

import * as css from './variants'

type Props = HTMLAttributes<HTMLLabelElement>

export const Label = ({ id, className, children, ...restProps }: Props) => {
  return (
    <label htmlFor={id} className={cn(css.label({ className }))} {...restProps}>
      {children}
    </label>
  )
}
