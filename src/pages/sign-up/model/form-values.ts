export type FormValues = {
  email: string
  password: string
  name: string
  country: string
  genderType: 'MALE' | 'FEMALE'
  birthDate: string
}

export const defaultValues: FormValues = {
  email: '',
  password: '',
  name: '',
  country: '',
  genderType: 'FEMALE',
  birthDate: '',
}
