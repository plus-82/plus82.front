export type FormValues = {
  email: string
  code: string
  password: string
  name: string
  country: string
  genderType: 'MALE' | 'FEMALE'
  birthDate: string
}

export const defaultValues: FormValues = {
  email: '',
  code: '',
  password: '',
  name: '',
  country: '',
  genderType: 'FEMALE',
  birthDate: '',
}
