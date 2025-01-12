import Link from 'next/link'
import {
  type ComponentProps,
  type ElementType,
  ForwardedRef,
  forwardRef,
} from 'react'

import { cn } from 'shared/lib'
import { button, ButtonVariants } from 'shared/ui/button/variants'

type ButtonProps = ButtonVariants & {
  as?: 'button' | 'a'
}

type Props<E extends ElementType> = ButtonProps &
  Omit<ComponentProps<E>, keyof ButtonProps>

export const Button = forwardRef(
  <E extends ElementType>(
    {
      as,
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      className,
      ...restProps
    }: Props<E>,
    ref: ForwardedRef<ComponentProps<E>>,
  ) => {
    const $Element = as || 'button'

    if (as === 'a') {
      return (
        <Link href={restProps?.href} passHref legacyBehavior>
          <$Element
            ref={ref}
            className={cn(button({ variant, size, fullWidth, className }))}
            {...restProps}
          />
        </Link>
      )
    }

    return (
      <$Element
        ref={ref}
        className={cn(button({ variant, size, fullWidth, className }))}
        {...restProps}
      />
    )
  },
)

Button.displayName = 'Button'
