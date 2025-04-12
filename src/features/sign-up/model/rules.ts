import { FormValues } from './form-values'

const REG_EMAIL =
  /^([A-Za-z0-9]+([-_.]?[A-Za-z0-9])*)@([A-Za-z0-9]+([-]?[A-Za-z0-9])*)(\.([A-Za-z0-9]+([-]?[A-Za-z0-9])*))?(\.([A-Za-z0-9]([-]?[A-Za-z0-9])*))?((\.[A-Za-z]{2,63})$)/

export const email = {
  required: 'validation.email.required',
  maxLength: {
    value: 254,
    message: 'validation.email.maxLength',
  },
  pattern: {
    value: REG_EMAIL,
    message: 'validation.email.pattern',
  },
}

export const code = {
  required: 'validation.code.required',
}

const REG_UPPER_LOWER_CASE_LETTERS = /(?=.*[a-z])(?=.*[A-Z])/
const REG_NUMBER = /(?=.*\d)/
const REG_SPECIAL_CHAR = /(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/

export const isCorrectLength = (value: string) =>
  value.length >= 9 && value.length <= 28

export const hasNumber = (value: string) => REG_NUMBER.test(value)

export const hasLowercaseAndUppercaseLetter = (value: string) =>
  REG_UPPER_LOWER_CASE_LETTERS.test(value)

export const hasSpecialChar = (value: string) => REG_SPECIAL_CHAR.test(value)

export const password = {
  required: true,
  validate: (value: string) =>
    isCorrectLength(value) &&
    hasNumber(value) &&
    hasLowercaseAndUppercaseLetter(value) &&
    hasSpecialChar(value),
}

export const confirmPassword = {
  required: 'validation.confirm-password.required',
  validate: (value: string | number | null, formValues: FormValues) => {
    if (value === formValues.password) return true

    return 'validation.confirm-password.match'
  },
}

export const firstName = {
  required: 'validation.firstName.required',
  maxLength: {
    value: 254,
    message: 'validation.firstName.maxLength',
  },
}

export const lastName = {
  required: 'validation.lastName.required',
  maxLength: {
    value: 254,
    message: 'validation.lastName.maxLength',
  },
}

export const country = {
  required: 'validation.country.required',
}

export const birthDate = {
  required: 'validation.birthDate.required',
}
