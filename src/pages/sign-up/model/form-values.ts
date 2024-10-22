export type FormValues = {
  email: string
  code: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  country: string | null
  genderType: 'MALE' | 'FEMALE'
  birthDate: string | null
}

export const defaultValues: FormValues = {
  email: '',
  code: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  country: null,
  genderType: 'FEMALE',
  birthDate: null,
}
