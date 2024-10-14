import { useState } from 'react'

import { colors } from 'shared/config'
import { Slot } from 'shared/lib'

import { Icon } from '../icon'

import { TextField, Props as TextFieldProps } from './text-field'

interface Props extends TextFieldProps {
  showToggle?: boolean
}

export const PasswordField = ({ showToggle, ...restProps }: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <TextField {...restProps} type={showPassword ? 'text' : 'password'}>
      {showToggle && (
        <Slot name="right">
          <button
            type="button"
            aria-label="Toggle password visibility"
            onClick={togglePasswordVisibility}
          >
            <Icon
              name={showPassword ? 'EyesOn' : 'EyesOff'}
              size="large"
              color={colors.gray['500']}
            />
          </button>
        </Slot>
      )}
    </TextField>
  )
}
