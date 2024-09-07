import { forwardRef, InputHTMLAttributes } from 'react'

import { cn } from 'shared/lib'
import {
  textField,
  input,
  TextFieldVariants,
} from 'shared/ui/text-field/variants'

type Props = InputHTMLAttributes<HTMLInputElement> &
  TextFieldVariants & {
    error?: boolean
  }

export const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      type = 'text',
      className,
      fullWidth = false,
      error = false,
      readOnly = false,
      disabled = false,
      maxLength = 255,
      autoComplete = 'off',
      ...restProps
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          textField({
            fullWidth,
            error,
            disabled,
            className,
          }),
        )}
        onClick={focus}
      >
        <input
          {...restProps}
          type={type}
          className={cn(input())}
          autoComplete={autoComplete}
          readOnly={readOnly}
          disabled={disabled}
          maxLength={maxLength}
          ref={ref}
        />
      </div>
    )
  },
)

TextField.displayName = 'TextField'
