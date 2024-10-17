export type FormValues = {
  email: string
  code: string
  password: string
  confirmPassword: string
  name: string
  country: string
  genderType: 'MALE' | 'FEMALE'
  birthDate: string
}

export const defaultValues: FormValues = {
  email: '',
  code: '',
  password: '',
  confirmPassword: '',
  name: '',
  country: '',
  genderType: 'FEMALE',
  birthDate: '',
}
