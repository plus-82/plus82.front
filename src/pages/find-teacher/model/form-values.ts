export type FormValues = {
  genderType: string[] | null
  age: number[]
  visaType: string[] | null
  studentType: string[] | null
  countryId: number[] | null
}

export const defaultValues: FormValues = {
  genderType: [],
  age: [0, 50],
  visaType: [],
  studentType: [],
  countryId: [],
}
