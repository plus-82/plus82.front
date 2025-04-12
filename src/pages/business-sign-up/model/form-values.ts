import { AcademySignUpRequest, Location } from 'entities/auth'

export type FormValues = {
  email: string
  password: string
  confirmPassword: string
  fullName: string
  genderType: 'FEMALE' | 'MALE'
  birthDate: string
  representativeName: string
  academyName: string
  academyNameEn: string
  locationType: Location | null
  address: string
  detailedAddress: string
  lat: number | null
  lng: number | null
  businessRegistrationNumber: string
}

export const defaultValues: FormValues = {
  email: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  genderType: 'FEMALE',
  birthDate: '',
  representativeName: '',
  academyName: '',
  academyNameEn: '',
  locationType: null,
  address: '',
  detailedAddress: '',
  lat: null,
  lng: null,
  businessRegistrationNumber: '',
}

export const convertToAcademySignUpDTO = ({
  address,
  detailedAddress,
  ...restFormValues
}: FormValues): AcademySignUpRequest => {
  return {
    ...restFormValues,
    locationType: restFormValues.locationType!,
    lat: restFormValues.lat!,
    lng: restFormValues.lng!,
    detailedAddress: `${address} ${detailedAddress}`,
  }
}
