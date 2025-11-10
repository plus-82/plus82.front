'use server'

import { getBusinessSession } from 'entities/auth'
import { apiClient, Pagination, PaginationParams } from 'shared/api'

import { RepresentativeResume } from '../model/resume'

export type GetRepresentativeResumesRequest = PaginationParams<{
  genderType?: 'MALE' | 'FEMALE'
  fromBirthDate?: string
  toBirthDate?: string
  countryIdList?: string[]
  visaTypeList?: string[]
  forKindergarten?: boolean
  forElementary?: boolean
  forMiddleSchool?: boolean
  forHighSchool?: boolean
  forAdult?: boolean
}>

type GetRepresentativeResumesResponse = Pagination<RepresentativeResume>

export const getRepresentativeResumes = async (
  queryParams: GetRepresentativeResumesRequest,
) => {
  const { accessToken } = await getBusinessSession()

  const response = await apiClient.get<GetRepresentativeResumesResponse>({
    endpoint: '/resumes/representatives',
    queryParams,
    option: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}
