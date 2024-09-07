import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  MouseEvent,
  FocusEvent,
} from 'react'

import { cn, useFocus } from 'shared/lib'
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
      onClick,
      onFocus,
      onBlur,
      ...restProps
    },
    ref,
  ) => {
    const {
      focused,
      elementRef,
      handleElementClick,
      handleElementFocus,
      handleElementBlur,
    } = useFocus<HTMLInputElement>()

    useImperativeHandle(ref, () => elementRef.current as HTMLInputElement)

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
      onClick?.(event)
      handleElementClick()
    }

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      onFocus?.(event)
      handleElementFocus()
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      onBlur?.(event)
      handleElementBlur()
    }

    return (
      <div
        className={cn(
          textField({
            fullWidth,
            error,
            disabled,
            focused,
            className,
          }),
        )}
        onClick={handleClick}
      >
        <input
          {...restProps}
          type={type}
          className={cn(input())}
          autoComplete={autoComplete}
          readOnly={readOnly}
          disabled={disabled}
          maxLength={maxLength}
          data-error={error}
          ref={elementRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    )
  },
)

TextField.displayName = 'TextField'
