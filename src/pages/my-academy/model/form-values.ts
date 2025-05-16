import { UpdateUserMeRequest, User } from 'entities/user'

export type UpdateUserMeFormValues = {
  fullName: string
  genderType: 'MALE' | 'FEMALE'
  birthDate: string | null
}

export const convertToUpdateUserMeFormValues = (
  user: User,
): UpdateUserMeFormValues => {
  return {
    fullName: user.firstName + ' ' + user.lastName,
    genderType: user.genderType,
    birthDate: user.birthDate,
  }
}

// FIXME: 타입 수정 후 변경 필요
export const convertToUpdateUserMeDTO = (
  data: UpdateUserMeFormValues,
): UpdateUserMeRequest => {
  return {
    ...data,
    birthDate: data.birthDate!,
    countryId: null,
    firstName: '',
    lastName: '',
  }
}

export type ChangePasswordFormValues = {
  currentPassword: string
  newPassword: string
}

export const changePasswordFormDefaultValues: ChangePasswordFormValues = {
  currentPassword: '',
  newPassword: '',
}
