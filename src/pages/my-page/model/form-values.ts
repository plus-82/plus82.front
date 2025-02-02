import { UpdateUserMeRequest, User } from 'entities/user'

export type FormValues = {
  firstName: string
  lastName: string
  countryId: number | null
  genderType: 'MALE' | 'FEMALE'
  birthDate: string | null
}

export const convertToFormValues = (user: User): FormValues => {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    countryId: null, // TODO: countryId: user.countryId
    genderType: user.genderType,
    birthDate: user.birthDate,
  }
}

export const convertToUpdateUserMeDTO = (
  data: FormValues,
): UpdateUserMeRequest => {
  return {
    ...data,
    countryId: data.countryId!,
    birthDate: data.birthDate!,
  }
}
