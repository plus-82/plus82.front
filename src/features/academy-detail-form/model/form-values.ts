/* eslint-disable @typescript-eslint/no-unused-vars */

import { isNil } from 'lodash-es'

import type { AcademyDetail, UpdateAcademyDetail } from 'entities/academy'
import { Location } from 'entities/auth'
import { convertStudentType } from 'entities/job-post'

export type FormValues = {
  name: string
  nameEn: string
  representativeName: string
  description: string
  studentType: string[] | null
  images: {
    image: File | null
    url: string | null
  }[]
  locationType: Location | null
  address: string
  detailedAddress: string
  lat: number | null
  lng: number | null
  businessRegistrationNumber: string
}

export const convertToFormValues = (academyDetail: AcademyDetail) => {
  return {
    name: academyDetail.name,
    nameEn: academyDetail.nameEn,
    representativeName: academyDetail.representativeName,
    description: academyDetail.description ?? '',
    studentType: convertStudentType({
      forKindergarten: academyDetail.forKindergarten,
      forElementary: academyDetail.forElementary,
      forMiddleSchool: academyDetail.forMiddleSchool,
      forHighSchool: academyDetail.forHighSchool,
      forAdult: academyDetail.forAdult,
    }),
    images: [
      {
        image: null,
        url: null,
      },
    ],
    locationType: academyDetail.locationType,
    address: academyDetail.detailedAddress,
    detailedAddress: academyDetail.detailedAddress,
    lat: academyDetail.lat,
    lng: academyDetail.lng,
    businessRegistrationNumber:
      academyDetail.businessRegistrationNumber.replace(
        /(\d{3})(\d{2})(\d{5})/,
        '$1-$2-$3',
      ),
  }
}

export const convertToUpdateAcademyDetail = ({
  studentType,
  lat,
  lng,
  locationType,
  address,
  detailedAddress,
  businessRegistrationNumber,
  ...restFormValues
}: FormValues): UpdateAcademyDetail => {
  return {
    ...restFormValues,
    detailedAddress,
    lat: lat!,
    lng: lng!,
    locationType: locationType!,
    images: restFormValues.images
      .filter(({ image }) => image)
      .map(({ image }) => image!),
    forKindergarten: studentType?.includes('Kindergarten') ?? false,
    forElementary: studentType?.includes('Elementary') ?? false,
    forMiddleSchool: studentType?.includes('MiddleSchool') ?? false,
    forHighSchool: studentType?.includes('HighSchool') ?? false,
    forAdult: studentType?.includes('Adult') ?? false,
  }
}

export const canRegisterForm = (
  formValues: Pick<
    FormValues,
    | 'representativeName'
    | 'name'
    | 'nameEn'
    | 'address'
    | 'detailedAddress'
    | 'description'
    | 'studentType'
    | 'images'
  >,
) => {
  return (
    formValues.description &&
    !isNil(formValues.studentType) &&
    formValues.studentType.length > 0 &&
    formValues.images.filter(({ image }) => image).length > 0
  )
}
